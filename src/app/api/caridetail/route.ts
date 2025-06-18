import { NextRequest, NextResponse } from "next/server";
import { generateOAuthParams, buildOAuthSignature } from "@/lib/oauth";

const API_URL = "https://platform.fatsecret.com/rest/server.api";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const foodId = searchParams.get("id");

  if (!foodId) {
    return NextResponse.json({ error: "Missing food_id (?id=...)" }, { status: 400 });
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

    return NextResponse.json({
      id: food?.food_id,  
      name: food?.food_name,
      serving_size: `${firstServing?.serving_description}`,
      calories: Number(firstServing?.calories),
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
