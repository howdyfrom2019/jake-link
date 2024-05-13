import executeQuery from '@/lib/config/dbConfig';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const hash = searchParams.get('hash');
    if (!hash) {
      return NextResponse.json(
        { error: '올바르지 않은 요청입니다.' },
        { status: 400 },
      );
    }
    const result = (await executeQuery(
      `SELECT * FROM ShortenLink WHERE hash='${hash}'`,
      '',
    )) as Shorten.Create[];

    return NextResponse.json(result[0], { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
