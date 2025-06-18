import { NextRequest, NextResponse } from "next/server";
import { generateOAuthParams, buildOAuthSignature } from "@/lib/oauth";

const API_URL = "https://platform.fatsecret.com/rest/server.api";

function extractFirstNumber(text: string): number | null {
  const match = text.match(/([\d.]+)/);
  return match ? parseFloat(match[1]) : null;
}

function extractGram(text: string): number | null {
  const match = text.match(/([\d.]+)\s?g/i);
  return match ? parseFloat(match[1]) : null;
}

export async function POST(req: NextRequest) {
  const { foodId, customServingSize } = await req.json();

  if (!foodId || !customServingSize) {
    return NextResponse.json({ error: "Missing foodId or customServingSize" }, { status: 400 });
  }

  const oauthParams = generateOAuthParams();
  const requestParams = {
    ...oauthParams,
    method: "food.get",
    format: "json",
    food_id: foodId,
  };

  const signature = buildOAuthSignature("GET", API_URL, requestParams);
  const fullParams = new URLSearchParams({
    ...requestParams,
    oauth_signature: signature,
  });

  try {
    const res = await fetch(`${API_URL}?${fullParams}`);
    if (!res.ok) {
      const text = await res.text();
      console.error("FatSecret API error:", text);
      return NextResponse.json({ error: "FatSecret API error" }, { status: 500 });
    }

    const data = await res.json();
    const food = data?.food;
    const serving = food?.servings?.serving;
    const firstServing = Array.isArray(serving) ? serving[0] : serving;

    const servingText: string = firstServing?.serving_description;
    const baseCalories = Number(firstServing?.calories);

    const servingSizeInGram = extractGram(servingText) ?? extractFirstNumber(servingText);
    if (!servingSizeInGram || isNaN(servingSizeInGram) || !baseCalories) {
      return NextResponse.json({
        error: "Invalid serving size or calorie data",
        rawServing: servingText,
        rawCalories: firstServing?.calories,
      }, { status: 400 });
    }

    const caloriesPerGram = baseCalories / servingSizeInGram;
    const adjustedCalories = caloriesPerGram * customServingSize;

    return NextResponse.json({
      name: food?.food_name,
      originalCalories: baseCalories,
      originalServingSize: servingText,
      customServingSize,
      adjustedCalories: Math.round(adjustedCalories),
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
