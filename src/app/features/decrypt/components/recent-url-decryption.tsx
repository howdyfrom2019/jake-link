import { Card, CardContent } from '@/components/ui/card';
import { ShortenLink } from '@prisma/client';
import Link from 'next/link';
import urlMetadata from 'url-metadata';

export default async function RecentUrlDecryption({
  shortenLink,
}: {
  shortenLink: ShortenLink;
}) {
  const metadata = await fetchWebsiteMetadata(shortenLink.originalUrl);

  return (
    <Card>
      <CardContent className={'flex flex-col items-start space-y-2 pt-6'}>
        {metadata?.image ? (
          <img
            src={metadata.image}
            alt={'external-img'}
            width={48}
            height={48}
            className={'aspect-square rounded-full object-cover'}
          />
        ) : (
          <div
            className={
              'rounded-md bg-gray-900 px-3 py-1 text-sm font-medium text-gray-50'
            }
          >
            Shortened
          </div>
        )}
        <h3 className={'text-lg font-semibold'}>
          <Link className={'hover:underline'} href={`/${shortenLink.hash}`}>
            {metadata?.title ?? 'Secured Link'}
          </Link>
        </h3>
        <p className={'line-clamp-2 text-gray-500 dark:text-gray-400'}>
          {metadata?.description ?? 'Nothing can be found'}
        </p>
      </CardContent>
    </Card>
  );
}

async function fetchWebsiteMetadata(url: string) {
  try {
    const metadata = await urlMetadata(url);
    const title = metadata.title as string;
    const description = metadata.description as string;
    const image = metadata['og:image'] as string;

    return {
      title,
      description,
      image: image ? image : null,
    };
  } catch (error) {
    console.log(error);
  }
}
