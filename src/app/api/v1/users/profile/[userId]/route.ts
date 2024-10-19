import { NextResponse, NextRequest } from "next/server";
import data from "./data.mock.json";

/** Returns user detailed info */
export async function GET() {
  return NextResponse.json(data, { status: 200 });
}

/** Updates user username and image */
export async function PUT(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  // const formData = await request.formData();
  return NextResponse.json(data, { status: 200 });
}
