import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Missing id field" }, { status: 400 });
    }

    const existingFood = await db.food.findUnique({
      where: { id },
    });

    if (!existingFood) {
      return NextResponse.json({ error: "Food not found" }, { status: 404 });
    }

    const deletedFood = await db.food.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, deletedFood });
  } catch (error) {
    console.error("Error deleting food:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}