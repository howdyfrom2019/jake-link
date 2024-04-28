interface ShortenCreatePayload {
  originalUrl: string;
}

interface ShortenCreate {
  compressed: string;
  original: string;
}

declare namespace Shorten {
  type CreatePayload = ShortenCreatePayload;
  type Create = ShortenCreate;
}
