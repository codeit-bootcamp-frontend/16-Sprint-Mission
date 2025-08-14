import type { NextApiRequest, NextApiResponse } from "next";
import handleAuthPostRequest from "@/utils/authPostRequest";
import { AuthReqError } from "@/types/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const reqBody = { ...req.body };
  const endpoint = "/auth/signUp";

  try {
    const data = await handleAuthPostRequest({ endpoint, reqBody, req, res });

    return res.status(200).json({ user: data.user || null });
  } catch (err) {
    const error = err as AuthReqError;
    return res.status(error.status || 500).json({
      message: error.message || "회원가입 요청에 실패했습니다.",
    });
  }
}
