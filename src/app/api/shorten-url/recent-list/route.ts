import prisma from '@/lib/config/db-config';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export async function GET(request: NextRequest) {
  try {
    const shortenUrls = await prisma.shortenLink.findMany({
      take: 3,
      orderBy: {
        created: 'desc',
      },
    });

    return NextResponse.json(shortenUrls, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
