import type { NextApiRequest, NextApiResponse } from "next";
import * as cookie from "cookie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 쿠키 삭제
  res.setHeader("Set-Cookie", [
    cookie.serialize("accessToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 0, // 즉시 만료
    }),
    cookie.serialize("refreshToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 0,
    }),
  ]);

  return res.status(200).json({ message: "로그아웃 되었습니다." });
}
