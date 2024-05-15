import prisma from '@/lib/config/db-config';
import crypto from 'crypto-js';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    if (!isShortenUrlPayload(payload)) {
      return NextResponse.json(
        { error: '올바르지 않은 요청입니다.' },
        { status: 400 },
      );
    }
    const { originalUrl } = payload;
    const utf8crypted = crypto.enc.Utf8.parse(originalUrl);
    const base64crypted = crypto.enc.Base64url.stringify(utf8crypted);
    const compressed = compressSha256(base64crypted);

    const shortenLink = await prisma.shortenLink.create({
      data: {
        hash: compressed,
        originalUrl: originalUrl,
      },
    });

    return NextResponse.json(shortenLink, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}

const isShortenUrlPayload = (
  payload: any,
): payload is Shorten.CreatePayload => {
  return typeof payload.originalUrl === 'string';
};

export function compressSha256(originalUrl: string): string {
  // 원본 URL과 사용자 ID를 결합하여 해시화
  const hashInput = `${originalUrl}:${Math.floor(Date.now() / 1000)}`;
  const hashObject = crypto.SHA256(hashInput);
  const hashHex = hashObject.toString(crypto.enc.Hex);

  // 생성된 해시 값을 축약 코드로 사용
  const shortenedCode = hashHex.slice(0, 6);
  return shortenedCode;
}
