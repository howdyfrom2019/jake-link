declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_ENVIRONMENT: 'dev' | 'prod';
    DATABASE_URL: string;
  }
}
