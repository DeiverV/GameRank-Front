import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  console.log(params.userId);
  return NextResponse.json({
    success: true,
  });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  console.log(params.userId);
  return NextResponse.json({
    success: true,
  });
}
