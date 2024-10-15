import { NextResponse, NextRequest } from "next/server";
import data from "./data.mock.json";

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  return NextResponse.json(data);
}
