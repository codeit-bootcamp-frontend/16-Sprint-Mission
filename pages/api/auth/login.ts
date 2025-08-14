import type { NextApiRequest, NextApiResponse } from "next";
import * as cookie from "cookie";
import { apiUrl } from "@/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email, password } = req.body;

  try {
    const backendRes = await fetch(`${apiUrl}/auth/signIn`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await backendRes.json();

    if (!backendRes.ok) {
      console.log(backendRes.status, await backendRes.text());
    }

    if (backendRes.ok && data.accessToken && data.refreshToken) {
      // 토큰을 쿠키로 저장
      res.setHeader("Set-Cookie", [
        cookie.serialize("accessToken", data.accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
          maxAge: 60 * 30, // 30분
        }),
        cookie.serialize("refreshToken", data.refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
          maxAge: 60 * 60 * 24 * 7, // 7일
        }),
      ]);
    }

    return res.status(backendRes.status).json({
      user: data.user || null,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "로그인 요청에 실패했습니다." });
  }
}
