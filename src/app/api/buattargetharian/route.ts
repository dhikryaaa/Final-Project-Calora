import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";

const JENIS_MENU = ["Sarapan", "Makan Siang", "Makan Malam", "Cemilan"];

export async function POST(req: NextRequest) {
  try {
    // const session = await getServerSession(authOptions);
    // if (!session || !session.user || !session.user.id) {
    //     return NextResponse.json({ error: "You must Log-in" }, { status: 401 });
    // }

    // const userId = Number(session.user.id);

    const userId = 6; // For testing purposes, replace with session.user.id in production

    const body = await req.json();
    const { date, target } = body;

    const tanggal = new Date(date);
    tanggal.setUTCHours(0, 0, 0, 0);

    const existingTarget = await db.dailyTarget.findUnique({
      where: {
        userId_date: {
          userId,
          date: tanggal,
        },
      },
    });

    if (existingTarget) {
      return NextResponse.json({ error: "Target already exists for this date." }, { status: 400 });
    }

    const newTarget = await db.dailyTarget.create({
      data: {
        userId,
        date: tanggal,
        target,
      },
    });

    const createdMenus = await db.menu.createMany({
      data: JENIS_MENU.map((jenis) => ({
        jenisMenu: jenis,
        hari: tanggal,
        userId,
      })),
    });

    return NextResponse.json({
      message: "Daily target and menus created.",
      target: newTarget,
      menusCreated: createdMenus.count,
    });
  } catch (error) {
    console.error("Error creating daily target and menus:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
