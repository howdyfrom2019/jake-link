import EncryptForm from '@/app/features/encrypt/components/EncryptForm';
import { ModeToggle } from '@/components/custom/mode-toggle';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main
        className={
          'flex min-h-[100dvh] w-full flex-col items-center justify-center bg-gray-100 py-12 dark:bg-gray-900 md:py-24 lg:py-32'
        }
      >
        <div className={'container px-4 md:px-6'}>
          <div className={'flex flex-col items-center space-y-6 text-center'}>
            <div className={'space-y-4'}>
              <h1
                className={
                  'text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'
                }
              >
                Shorten Your Links
              </h1>
              <p
                className={
                  'max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl'
                }
              >
                Simplify your online presence with our powerful link shortening
                tool. Get clean, shareable links in seconds.
              </p>
            </div>
            <div className={'w-full max-w-md'}>
              <EncryptForm />
            </div>
          </div>
        </div>
      </main>
      <section className={'w-full py-12 md:py-24 lg:py-32'}>
        <div className={'container px-4 md:px-6'}>
          <div
            className={'grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'}
          >
            <Card>
              <CardContent
                className={'flex flex-col items-start space-y-2 pt-6'}
              >
                <div
                  className={
                    'rounded-md bg-gray-900 px-3 py-1 text-sm font-medium text-gray-50'
                  }
                >
                  Shortened
                </div>
                <h3 className={'text-lg font-semibold'}>
                  <Link className={'hover:underline'} href={'#'}>
                    https://example.com/abc123
                  </Link>
                </h3>
                <p className={'line-clamp-2 text-gray-500 dark:text-gray-400'}>
                  This is a sample shortened link that demonstrates the power of
                  our link shortening tool.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent
                className={'flex flex-col items-start space-y-2 pt-6'}
              >
                <div
                  className={
                    'rounded-md bg-gray-900 px-3 py-1 text-sm font-medium text-gray-50'
                  }
                >
                  Shortened
                </div>
                <h3 className={'text-lg font-semibold'}>
                  <Link className={'hover:underline'} href={'#'}>
                    https://example.com/xyz456
                  </Link>
                </h3>
                <p className={'line-clamp-2 text-gray-500 dark:text-gray-400'}>
                  This is another sample shortened link that demonstrates the
                  power of our link shortening tool.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent
                className={'flex flex-col items-start space-y-2 pt-6'}
              >
                <div
                  className={
                    'rounded-md bg-gray-900 px-3 py-1 text-sm font-medium text-gray-50'
                  }
                >
                  Shortened
                </div>
                <h3 className={'text-lg font-semibold'}>
                  <Link className={'hover:underline'} href={'#'}>
                    https://example.com/def789
                  </Link>
                </h3>
                <p className={'line-clamp-2 text-gray-500 dark:text-gray-400'}>
                  This is a third sample shortened link that demonstrates the
                  power of our link shortening tool.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
