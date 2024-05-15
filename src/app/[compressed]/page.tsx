'use client';

import { Progress } from '@/components/ui/progress';
import { useShortenLink } from '@/requests/shorten';
import { useEffect, useState } from 'react';

let interval: NodeJS.Timeout | null = null;
export default function RedirectPage({
  params,
}: {
  params: { compressed: string };
}) {
  const [progress, setProgress] = useState(1);
  const { data } = useShortenLink(params.compressed);

  useEffect(() => {
    if (!data) return;
    interval = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 10);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [data]);

  useEffect(() => {
    if (!interval || !data) return;
    if (progress === 100) {
      clearInterval(interval);
      window.location.assign(data.originalUrl);
    }
  }, [progress, data]);

  return (
    <main
      className={
        'relative flex min-h-[100dvh] w-full flex-col items-center justify-center bg-gray-100 py-12 dark:bg-gray-900 md:py-24 lg:py-32'
      }
    >
      <div className={'container px-4 md:px-6'}>
        <div className={'flex flex-col items-center space-y-6 text-center'}>
          <h1 className={'text-center text-xl font-bold'}>Redirecting.....</h1>
          <Progress value={progress} className={'w-80'} />
        </div>
      </div>
    </main>
  );
}
