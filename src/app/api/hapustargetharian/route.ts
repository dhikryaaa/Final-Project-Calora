import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { startOfDay } from "date-fns";

export async function DELETE() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = Number(session.user.id);

    if (!userId) {
      return NextResponse.json({ error: "userId are required" }, { status: 400 });
    }

    const parsedDate = startOfDay(new Date())

    const existingTarget = await db.dailyTarget.findUnique({
      where: {
        userId_date: {
          userId,
          date: parsedDate,
        },
      },
    });

    if (!existingTarget) {
      return NextResponse.json({ error: "Daily target not found" }, { status: 404 });
    }

    const menus = await db.menu.findMany({
      where: {
        userId,
        hari: parsedDate,
      },
      select: { id: true },
    });

    const menuIds = menus.map((menu) => menu.id);

    if (menuIds.length > 0) {
      await db.food.deleteMany({
        where: {
          menuId: { in: menuIds },
        },
      });

      await db.menu.deleteMany({
        where: {
          id: { in: menuIds },
        },
      });
    }

    const deletedTarget = await db.dailyTarget.delete({
      where: {
        userId_date: {
          userId,
          date: parsedDate,
        },
      },
    });

    return NextResponse.json({
      message: "Daily target and related menus deleted",
      deletedTarget,
      deletedMenuCount: menuIds.length,
    });
  } catch (error) {
    console.error("Error deleting Daily Target and Menus:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
