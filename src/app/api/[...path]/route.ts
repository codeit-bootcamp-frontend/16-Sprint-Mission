import axios, { isAxiosError } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

import type { AxiosRequestConfig } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function handleRequest(req: NextRequest, method: 'GET' | 'POST' | 'PUT' | 'DELETE') {
  try {
    // path 추출
    const pathArray = req.nextUrl.pathname.replace(/^\/api\//, '').split('/');
    const targetURL = `${BASE_URL}/${pathArray.join('/')}`;

    const config: AxiosRequestConfig = {
      method,
      url: targetURL,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (['POST', 'PUT'].includes(method)) {
      config.data = await req.json();
    }

    const response = await axios(config);

    return NextResponse.json(response.data, { status: response.status });
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      return NextResponse.json(
        { error: error.message, details: error.response?.data },
        { status: error.response?.status || 500 },
      );
    }
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  return handleRequest(req, 'GET');
}

export async function POST(req: NextRequest) {
  return handleRequest(req, 'POST');
}

export async function PUT(req: NextRequest) {
  return handleRequest(req, 'PUT');
}

export async function DELETE(req: NextRequest) {
  return handleRequest(req, 'DELETE');
}
