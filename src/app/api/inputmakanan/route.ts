import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    // const session = await getServerSession(authOptions);
    // if (!session || !session.user || !session.user.id) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    // const userId = Number(session.user.id);

    const userId = 6; // replace with session user in production

    const body = await req.json();
    const { jenisMenu, foodId, takaran, kalori } = body;

    if (!jenisMenu || !foodId || !takaran || !kalori) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const targetDate = new Date();
    targetDate.setUTCHours(0, 0, 0, 0);

    const menu = await db.menu.findFirst({
      where: {
        userId,
        jenisMenu,
        hari: targetDate,
      },
    });

    if (!menu) {
      return NextResponse.json({ error: "Menu not found for this date and type" }, { status: 404 });
    }

    const food = await db.food.create({
      data: {
        foodId,
        takaran,
        kalori,
        menuId: menu.id,
      },
    });

    return NextResponse.json({ success: true, food });
  } catch (error) {
    console.error("Error adding food:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
