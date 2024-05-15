import Providers from '@/app/providers';
import '@/lib/config/env-config';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Jake Link',
  description: '긴 링크를 줄여보세요!',
  keywords: '링크 단축, shorten link, vercel, 축약',
};

export default function RootLayout({
  children,
  darkmode,
}: Readonly<{
  children: ReactNode;
  darkmode: ReactNode;
}>) {
  return (
    <html lang={'en'}>
      <Providers>
        <body
          className={cn([
            inter.variable,
            'relative font-inter text-base font-normal',
          ])}
        >
          {children}
          {darkmode}
        </body>
      </Providers>
    </html>
  );
}

export const revalidate = 3600;
