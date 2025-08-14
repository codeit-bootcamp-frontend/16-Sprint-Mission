import type { NextApiRequest, NextApiResponse } from "next";
import { apiUrl } from "@/constants";
import { AuthReqBody } from "@/types/auth";

interface Props {
  endpoint: string;
  reqBody: AuthReqBody;
  req: NextApiRequest;
  res: NextApiResponse;
}

const handleAuthPostRequest = async ({
  endpoint,
  reqBody,
  req,
  res,
}: Props) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const backendRes = await fetch(`${apiUrl}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqBody),
  });

  const reqErrText = await backendRes.text(); // 응답을 한 번만 불러와서 사용하기
  let data;
  try {
    data = JSON.parse(reqErrText);
  } catch {
    data = { message: reqErrText };
  }

  if (!backendRes.ok) {
    throw {
      status: backendRes.status,
      message: data.message || "요청에 실패했습니다.",
    };
  }

  return data;
};

export default handleAuthPostRequest;
