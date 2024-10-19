import { NextResponse } from "next/server";
import data from './data.mock.json'

/**Returns all users */
export async function GET() {
  return NextResponse.json(data);
}
