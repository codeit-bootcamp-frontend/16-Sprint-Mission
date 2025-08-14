import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// 서버 사이드 여부
// const isServer = typeof window === 'undefined';

export async function GET(req: NextRequest) {
  try {
    // req.nextUrl.pathname에서 동적 path 추출
    const pathArray = req.nextUrl.pathname.replace(/^\/api\//, '').split('/');
    console.log('route 파일 적용');
    // if (isServer) {
    const targetURL = `${BASE_URL}/${pathArray.join('/')}`;
    const response = await axios.get(targetURL, {
      headers: { 'Content-Type': 'application/json' },
    });
    return NextResponse.json(response.data);
    // }

    // 클라이언트에서 호출되면 그대로 외부 API URL 전달 가능
    // return NextResponse.json({ message: '클라이언트 호출용 응답' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      // 일반적인 Error 타입이면 message 사용 가능
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    // Error가 아닐 경우 fallback 처리
    return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
  }
}
