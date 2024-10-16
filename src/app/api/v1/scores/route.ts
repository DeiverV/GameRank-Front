import { NextResponse, NextRequest } from "next/server";

// Create Score
export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);

  return NextResponse.json({}, { status: 201 });
}
