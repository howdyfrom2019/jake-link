interface ShortenCreatePayload {
  originalUrl: string;
}

interface ShortenCreate {
  id: number;
  hash: string;
  originalUrl: string;
  created: string;
  updated: string;
}

declare namespace Shorten {
  type CreatePayload = ShortenCreatePayload;
  type Create = ShortenCreate;
}
