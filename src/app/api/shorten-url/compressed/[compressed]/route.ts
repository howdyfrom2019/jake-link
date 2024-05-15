import prisma from '@/lib/config/db-config';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  compressed: string;
};

export const dynamic = 'force-dynamic';
export async function GET(request: NextRequest, context: { params: Params }) {
  try {
    const compressed = context.params.compressed;
    if (!compressed) {
      return NextResponse.json(
        { error: '올바르지 않은 요청입니다.' },
        { status: 400 },
      );
    }

    const result = await prisma.shortenLink.findFirst({
      where: {
        hash: compressed,
      },
    });

    if (!result) {
      return NextResponse.json(
        { eror: '존재하지 않는 페이지입니다.' },
        { status: 404 },
      );
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
