import { NextRequest, NextResponse } from "next/server";
import data from "./data.mock.json";
import { GetUserScoresPayload } from "@/src/store/models";

export async function GET(
  request: NextRequest,
  { params }: { params: GetUserScoresPayload }
) {
  const slicedData = data.slice(0, params.limit);
  return NextResponse.json(slicedData, { status: 200 });
}
