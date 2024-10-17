import { NextResponse, NextRequest } from "next/server";
import data from "./data.mock.json";

export async function GET() {
  return NextResponse.json(data, { status: 200 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  const formData = await request.formData();
  console.log(formData, params.username);
  return NextResponse.json(data, { status: 200 });
}
