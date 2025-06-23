import { NextRequest, NextResponse } from "next/server";
import { generateOAuthParams, buildOAuthSignature } from "@/lib/oauth";

const API_URL = "https://platform.fatsecret.com/rest/server.api";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ error: "Missing query (?q=...)" }, { status: 400 });
  }

  const oauthParams = generateOAuthParams();
  const requestParams = {
    ...oauthParams,
    method: "foods.search",
    format: "json",
    search_expression: query,
    max_results: "6"
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
    const foods = data?.foods?.food;
    const items = Array.isArray(foods) ? foods : [foods];

    return NextResponse.json({ items });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
