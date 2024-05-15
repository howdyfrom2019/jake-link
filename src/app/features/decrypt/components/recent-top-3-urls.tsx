'use server';

import RecentUrlDecryption from '@/app/features/decrypt/components/recent-url-decryption';
import prisma from '@/lib/config/db-config';

export default async function RecentTop3URLs() {
  const recentCryptedList = await fetchRecentCryptedList();
  return (
    <section className={'w-full py-12 md:py-24 lg:py-32'}>
      <div className={'container px-4 md:px-6'}>
        <div className={'grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'}>
          {recentCryptedList.map((crypted) => (
            <RecentUrlDecryption key={crypted.id} shortenLink={crypted} />
          ))}
        </div>
      </div>
    </section>
  );
}

async function fetchRecentCryptedList() {
  const shortenUrls = await prisma.shortenLink.findMany({
    take: 3,
    orderBy: {
      created: 'desc',
    },
  });

  return shortenUrls;
}
