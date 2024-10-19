import { NextResponse } from "next/server";
import data from "./data.mock.json";

/** Route to get all games */
export async function GET() {
  return NextResponse.json(data, { status: 200 });
}
