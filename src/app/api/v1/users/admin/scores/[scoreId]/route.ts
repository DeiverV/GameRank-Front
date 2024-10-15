import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { scoreId: string } }
) {
  console.log(params.scoreId);
  return NextResponse.json({
    success: true,
  });
}
