import { NextRequest, NextResponse } from "next/server";
import data from "./data.mock.json";
import { GetLeaderboardPayload } from "@/src/store/models";

/** Returns users leaderboard */
export async function GET(
  request: NextRequest,
  { params }: { params: GetLeaderboardPayload }
) {
  return NextResponse.json(data, { status: 200 });
}
