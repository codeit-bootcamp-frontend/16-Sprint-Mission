import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function GET(req: NextRequest) {
  try {
    // req.nextUrl.pathname에서 동적 path 추출
    const pathArray = req.nextUrl.pathname.replace(/^\/api\//, '').split('/');

    const targetURL = `${BASE_URL}/${pathArray.join('/')}`;
    const response = await axios.get(targetURL, {
      headers: { 'Content-Type': 'application/json' },
    });

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      // 일반적인 Error 타입이면 message 사용 가능
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    // Error가 아닐 경우 fallback 처리
    return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
  }
}
