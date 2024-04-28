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
    // const result = crypto.AES.encrypt(
    //   base64crypted,
    //   process.env.AES_KEY_PHRASE,
    // );
    // console.log(result);

    return NextResponse.json(
      {
        compressed: base64crypted,
        original: originalUrl,
      },
      { status: 200 },
    );
  } catch (error) {
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
