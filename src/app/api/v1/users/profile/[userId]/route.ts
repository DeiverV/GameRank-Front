import { NextResponse, NextRequest } from "next/server";
import data from "./data.mock.json";

export async function GET() {
  return NextResponse.json(data);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const formData = await request.formData();
  console.log(formData, params.userId);
  return NextResponse.json(data);
}
