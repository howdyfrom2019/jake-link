import { toast } from 'sonner';

const BASE64URL_CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const compressBase64 = (original: string) => {
  if (!original) {
    toast.error('유효한 URL이 아닙니다.');
  }
  let compressed = '';
  for (let i = 0; i < original.length; i++) {
    const char = original[i];
    const index = BASE64URL_CHARS.indexOf(char);
    compressed += BASE64URL_CHARS[index];
  }
  return compressed.slice(0, 7);
};

export const decompressBase64 = (compressed: string) => {
  if (compressed.length !== 7) {
    toast.error('압축된 문자열의 길이가 7이 아닙니다.');
  }
  let decompressed = '';
  for (let i = 0; i < compressed.length; i++) {
    const char = compressed[i];
    const index = BASE64URL_CHARS.indexOf(char);
    if (index === -1) {
      throw new Error(`'${char}'은(는) 올바른 압축 문자가 아닙니다.`);
    }
    decompressed += BASE64URL_CHARS[index];
  }
  return decompressed;
};

// function shortenUrl(originalUrl: string, userId: string): string {
//   // 원본 URL과 사용자 ID를 결합하여 해시화
//   const hashInput = `${originalUrl}:${userId}:${Math.floor(Date.now() / 1000)}`;
//   const hashObject = crypto.createHash('sha256');
//   hashObject.update(hashInput);
//   const hashHex = hashObject.digest('hex');

//   // 생성된 해시 값을 축약 코드로 사용
//   const shortenedCode = hashHex.slice(0, 6);
//   return shortenedCode;
// }

// // 사용 예시
// const originalUrl1 = 'https://google.com';
// const originalUrl2 = 'https://google.com/signup';
// const userId1 = 'user_a';
// const userId2 = 'user_b';

// const shortenedCode1 = shortenUrl(originalUrl1, userId1);
// const shortenedCode2 = shortenUrl(originalUrl2, userId2);

// console.log(`Original URL 1: ${originalUrl1}, User ID: ${userId1}, Shortened Code: ${shortenedCode1}`);
// console.log(`Original URL 2: ${originalUrl2}, User ID: ${userId2}, Shortened Code: ${shortenedCode2}`);
