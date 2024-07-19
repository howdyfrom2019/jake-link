import RecentTop3URLs from '@/app/features/decrypt/components/recent-top-3-urls';
import EncryptForm from '@/app/features/encrypt/components/encrypt-form';

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
      <RecentTop3URLs />
    </>
  );
}
