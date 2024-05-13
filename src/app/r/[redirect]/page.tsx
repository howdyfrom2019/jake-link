'use server';

import executeQuery from '@/lib/config/dbConfig';

export default async function page({
  params,
}: {
  params: { redirect: string };
}) {
  const info = await fetchUrlInfo(params.redirect);

  return (
    <div>
      hello friend <br />
      {JSON.stringify(info, null, 2)}
    </div>
  );
}

const fetchUrlInfo = async (hash: string) => {
  try {
    const result = (await executeQuery(
      `SELECT * FROM ShortenLink WHERE hash=${hash}`,
      '',
    )) as Shorten.Create[];
    return result[0];
  } catch (error) {
    return Promise.reject(error);
  }
};
