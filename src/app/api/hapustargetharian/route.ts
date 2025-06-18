import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";

export async function DELETE(req: NextRequest) {
  try {
    // const session = await getServerSession(authOptions);
    // if (!session || !session.user || !session.user.id) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    // const userId = Number(session.user.id);

    const userId = 6; // replace with session user in production

    const body = await req.json();
    const { date } = body;

    if (!date || !userId) {
      return NextResponse.json({ error: "Date and userId are required" }, { status: 400 });
    }

    const parsedDate = new Date(date);
    parsedDate.setUTCHours(0, 0, 0, 0);

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
