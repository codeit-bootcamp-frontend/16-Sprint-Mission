import type { NextApiRequest, NextApiResponse } from "next";
import handleAuthPostRequest from "@/utils/authPostRequest";
import { AuthReqError } from "@/types/auth";
import * as cookie from "cookie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const reqBody = { ...req.body };
  const endpoint = "/auth/signUp";

  try {
    const data = await handleAuthPostRequest({ endpoint, reqBody, req, res });

    if (data.accessToken && data.refreshToken) {
      res.setHeader("Set-Cookie", [
        cookie.serialize("accessToken", data.accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
          maxAge: 60 * 30,
        }),
        cookie.serialize("refreshToken", data.refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        }),
      ]);
    }

    return res.status(200).json({ user: data.user || null });
  } catch (err) {
    const error = err as AuthReqError;
    return res.status(error.status || 500).json({
      message: error.message || "회원가입 요청에 실패했습니다.",
    });
  }
}
