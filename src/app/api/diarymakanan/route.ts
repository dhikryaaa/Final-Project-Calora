import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { startOfDay, endOfDay } from "date-fns";


export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !session.user.id) {
        return NextResponse.json({ error: "You must Log-in" }, { status: 401 });
    }

    const userId = Number(session.user.id);

    if (!userId) {
      return NextResponse.json({ error: "Users not found" }, { status: 404 });
    }

    const today = new Date();
    const start = startOfDay(today);
    const end = endOfDay(today);
    
    
    const menus = await db.menu.findMany({
      where: {
        userId,
        hari: {
          gte: start,
          lte: end,
        },
      },
      include: {
        foods: true,
      },
    });

    const groupedByJenisMenu = menus.reduce((acc, menu) => {
      if (!acc[menu.jenisMenu]) {
        acc[menu.jenisMenu] = [];
      }
      acc[menu.jenisMenu].push(...menu.foods);
      return acc;
    }, {} as Record<string, typeof menus[0]["foods"]>);

    return NextResponse.json(groupedByJenisMenu);
  } catch (error) {
    console.error("Failed to fetch foods by jenisMenu:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
