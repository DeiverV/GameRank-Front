import { NextRequest, NextResponse } from "next/server";
import data from "./data.mock.json";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId:string, page: number; limit: number } }
) {
  const slicedData = data.slice(0, params.limit);
  return NextResponse.json(slicedData, { status: 200 });
}
