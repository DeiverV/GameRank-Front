import { NextResponse, NextRequest } from "next/server";

/**Creates An Score */
export async function POST(request: NextRequest) {
  // const body = await request.json();
  return NextResponse.json({ status: 201 });
}
