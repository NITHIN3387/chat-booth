import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {  
  req.headers.set("user", "Nithin N")  

  NextResponse.next()
}