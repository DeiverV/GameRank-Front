import { NextRequest, NextResponse } from "next/server";

/** Deletes a Score */
export async function DELETE(
  req: NextRequest,
  { params }: { params: { scoreId: string } }
) {
  return NextResponse.json("", { status: 204 });
}
