import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const URL = `${req.nextUrl.origin}/api/auth/user`;

  const cookieStore = cookies();
  const token =
    cookieStore.get("token")?.value ||
    req.headers.get("Authorization")?.split(" ")[1];

  const responce = await fetch(URL, {
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await responce.json();

  if (responce.status === 200) {
    const res = NextResponse.next();
    res.headers.set("user", JSON.stringify(data.user));

    return res;
  } else
    return NextResponse.json(
      { message: data.message },
      { status: responce.status }
    );
}

export const config = {
  matcher: "/api/room/:path*",
};
