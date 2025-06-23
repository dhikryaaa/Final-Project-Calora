import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { startOfDay, endOfDay, startOfWeek, endOfWeek } from "date-fns";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = Number(session.user.id);

    const today = new Date();
    if (!userId) return NextResponse.json({ error: "Missing userId" }, { status: 400 });

    // Today range
    const todayStart = startOfDay(today);
    const todayEnd = endOfDay(today);

    // Fetch today's menus with foods
    const todayMenus = await prisma.menu.findMany({
      where: {
        userId,
        hari: { gte: todayStart, lte: todayEnd },
      },
      include: {
        foods: true,
      },
    });

    const categoryCalories = {
      "Breakfast": 0,
      "Lunch": 0,
      "Dinner": 0,
    };

    for (const menu of todayMenus) {
      const totalKalori = menu.foods.reduce((sum, f) => sum + f.kalori, 0);
      if (categoryCalories[menu.jenisMenu as keyof typeof categoryCalories] !== undefined) {
        categoryCalories[menu.jenisMenu as keyof typeof categoryCalories] += totalKalori;
      }
    }

    const totalHariIni = Object.values(categoryCalories).reduce((sum, val) => sum + val, 0);

    // Target hari ini
    const targetHariIni = await prisma.dailyTarget.findFirst({
      where: {
        userId,
        date: {
          gte: todayStart,
          lte: todayEnd,
        },
      },
    });

    // Minggu ini (Senin - Minggu)
    const weekStart = startOfWeek(today, { weekStartsOn: 1 });
    const weekEnd = endOfWeek(today, { weekStartsOn: 1 });

    const weekMenus = await prisma.menu.findMany({
      where: {
        userId,
        hari: { gte: weekStart, lte: weekEnd },
      },
      include: {
        foods: true,
      },
    });

    // Hitung kalori per hari
    const dailyCalories: Record<string, number> = {};
    for (const menu of weekMenus) {
      const dateKey = menu.hari.toISOString().split("T")[0];
      const kalori = menu.foods.reduce((sum, f) => sum + f.kalori, 0);
      dailyCalories[dateKey] = (dailyCalories[dateKey] || 0) + kalori;
    }

    const kaloriPerHari = Object.values(dailyCalories);
    const avgKalori = kaloriPerHari.length > 0 ? Math.round(kaloriPerHari.reduce((a, b) => a + b, 0) / kaloriPerHari.length) : 0;

    const terbaik = Object.entries(dailyCalories).reduce((max, curr) => curr[1] > max[1] ? curr : max, ["", 0]);
    const terburuk = Object.entries(dailyCalories).reduce((min, curr) => curr[1] < min[1] ? curr : min, ["", Infinity]);

    const sesuaiTarget: string[] = [];
    for (const [date, kalori] of Object.entries(dailyCalories)) {
      const target = await prisma.dailyTarget.findUnique({
        where: {
          userId_date: {
            userId,
            date: new Date(date),
          },
        },
      });
      if (target && kalori >= target.target * 0.95 && kalori <= target.target * 1.05) {
        sesuaiTarget.push(date);
      }
    }

    return NextResponse.json({
      perKategori: categoryCalories,
      totalHariIni,
      targetHariIni: targetHariIni?.target || null,
      avgKalori,
      hariTerbaik: terbaik[0],
      hariTerburuk: terburuk[0],
      sesuaiTarget,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
