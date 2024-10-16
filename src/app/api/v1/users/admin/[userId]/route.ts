import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  console.log(params.userId);
  return NextResponse.json("", { status: 204 });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  console.log(params.userId);
  return NextResponse.json("", { status: 204 });
}
