import { NextRequest, NextResponse } from "next/server";
import data from "./data.mock.json";

export async function GET(
  request: NextRequest,
  { params }: { params: { page: number; limit: number; game: string } }
) {
  const slicedData = data
    .slice(0, params.limit)
    .filter((user) => user.game === params.game);

  return NextResponse.json(slicedData, { status: 200 });
}
