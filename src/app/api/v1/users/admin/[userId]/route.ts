import { NextRequest, NextResponse } from "next/server";

/** Blocks Or Unblock an User */
export async function PATCH(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  return NextResponse.json({ status: 204 });
}

/** Soft deletes an User */
export async function DELETE(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  return NextResponse.json({ status: 204 });
}
