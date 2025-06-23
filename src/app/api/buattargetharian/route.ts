import { db } from "@/lib/prisma";
import { startOfDay } from "date-fns";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const JENIS_MENU = ["Breakfast", "Lunch", "Dinner"]; 

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !session.user.id) {
        return NextResponse.json({ error: "You must Log-in" }, { status: 401 });
    }

    const userId = Number(session.user.id);

    const body = await req.json();
    const { target } = body;

    const tanggal = startOfDay(new Date())
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
