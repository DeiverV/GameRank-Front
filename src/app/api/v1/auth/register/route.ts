import { NextResponse, NextRequest } from "next/server";

/**Creates An User */
export async function POST(request: NextRequest) {
  // const body = await request.json();

  return NextResponse.json({}, { status: 201 });
}
