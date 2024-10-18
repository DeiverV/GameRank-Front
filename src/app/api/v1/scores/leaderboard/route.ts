import { NextRequest, NextResponse } from "next/server";
import data from "./data.mock.json";
import { GetLeaderboardPayload } from "@/src/store/models";

export async function GET(
  request: NextRequest,
  { params }: { params: GetLeaderboardPayload }
) {
  const slicedData = data;

  return NextResponse.json(slicedData, { status: 200 });
}
