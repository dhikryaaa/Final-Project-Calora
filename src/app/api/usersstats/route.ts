import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { startOfDay, endOfDay } from "date-fns";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = Number(session.user.id);
    const today = new Date();

    const todayStart = startOfDay(today);
    const todayEnd = endOfDay(today);

    const todayMenus = await db.menu.findMany({
      where: {
        userId,
        hari: { gte: todayStart, lte: todayEnd },
      },
      include: {
        foods: true,
      },
    });

    const categoryCaloriesToday = {
      Breakfast: 0,
      Lunch: 0,
      Dinner: 0,
    };

    for (const menu of todayMenus) {
      const totalKalori = menu.foods.reduce((sum, f) => sum + f.kalori, 0);
      if (menu.jenisMenu in categoryCaloriesToday) {
        categoryCaloriesToday[menu.jenisMenu as keyof typeof categoryCaloriesToday] += totalKalori;
      }
    }

    const totalHariIni = Object.values(categoryCaloriesToday).reduce((a, b) => a + b, 0);

    const targetHariIni = await db.dailyTarget.findFirst({
      where: {
        userId,
        date: {
          gte: todayStart,
          lte: todayEnd,
        },
      },
    });

    return NextResponse.json({
      perKategoriHariIni: categoryCaloriesToday,
      totalHariIni,
      targetHariIni: targetHariIni?.target || null,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
