import executeQuery from '@/lib/config/dbConfig';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const subPaths = pathname.split('/');
  // expect('/r/:hash')
  const hash = subPaths[2] ?? null;

  if (hash) {
    const originalUrl = await getOriginalUrl(hash);
    console.log(originalUrl);
    if (!originalUrl) return NextResponse.next();
    return NextResponse.redirect(originalUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/r/:redirect*'],
};

async function getOriginalUrl(redirect: string) {
  const result = (await executeQuery(
    `SELECT originalUrl FROM ShortenLink WHERE hash='${redirect}'`,
    '',
  )) as Shorten.CreatePayload[] | null;

  return result?.[0].originalUrl ?? null;
}
