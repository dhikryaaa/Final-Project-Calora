import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { foodId, menuId } = body;

    if (!foodId) {
      return NextResponse.json({ error: "Missing foodId fields" }, { status: 400 });
    }

    const foodDate = new Date();
    foodDate.setUTCHours(0, 0, 0, 0);

    const existingTarget = await db.food.findFirst({
      where: {
        foodId,
        menuId
      },
    });

    if (!existingTarget) {
      return NextResponse.json({ error: "Food not found" }, { status: 404 });
    }

    const deletedFood = await db.food.deleteMany({
      where: {
        foodId,
        menuId
      },
    });

    return NextResponse.json({ success: true, deletedFood });
  } catch (error) {
    console.error("Error deleting food:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}