import { NextRequest, NextResponse } from "next/server";

export function POST(req: NextRequest) {        
  return NextResponse.json({ req: req.headers.get("user") })
}