import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const { path } = await context.params;
  return handleApiRequest(request, path, 'GET');
}

async function handleApiRequest(request: NextRequest, pathSegments: string[], method: string) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    const apiPath = pathSegments.join('/');
    const targetURL = `${baseURL}/${apiPath}`;
    console.log(targetURL);

    const headers = {
      'Content-Type': 'application/json',
    };

    let body: string | undefined;
    if (method !== 'GET') {
      body = await request.text();
    }

    const response = await fetch(targetURL, {
      method,
      headers,
      body,
    });

    // 응답 데이터 파싱
    const data = await response.json();

    // 응답 반환
    return NextResponse.json(data, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('API proxy error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
