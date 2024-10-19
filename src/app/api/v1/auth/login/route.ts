import { NextResponse, NextRequest } from "next/server";
import data from "./data.mock.json";

/**Login the user */
export async function POST(request: NextRequest) {
  // const body = await request.json();

  return NextResponse.json(data, { status: 200 });
}
