import EncryptForm from '@/app/features/encrypt/components/EncryptForm';

export default function Home() {
  return (
    <main
      className={'flex min-h-screen flex-col items-center justify-between p-24'}
    >
      <EncryptForm />
    </main>
  );
}
