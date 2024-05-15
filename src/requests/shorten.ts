import jakeLinkService from '@/lib/config/axios-config';
import { ShortenLink } from '@prisma/client';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const encryptComplexUrl = async (body: Shorten.CreatePayload) => {
  try {
    const { data } = await jakeLinkService.post<ShortenLink>(
      '/api/shorten-url/encode',
      body,
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw {
        status: error.response?.status,
        error: error.response?.data.error,
      };
    }

    throw error;
  }
};

export const fetchRedirectLink = async (compressed: string) => {
  try {
    const { data } = await jakeLinkService.get<ShortenLink>(
      `/api/shorten-url/compressed/${compressed}`,
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw {
        status: error.response?.status,
        error: error.response?.data.error,
      };
    }

    throw error;
  }
};

export const fetchRecent3Links = async () => {
  try {
    const { data } = await jakeLinkService.get<ShortenLink[]>(
      `/api/shorten-url/recent-list`,
    );
    return data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      throw {
        status: error.response?.status,
        error: error.response?.data.error,
      };
    }

    throw error;
  }
};

export const useEncodeShortenUrl = (
  onSuccess?: (data: ShortenLink) => void,
  onError?: (error: NextError) => void,
) => {
  const { mutate, mutateAsync } = useMutation({
    mutationFn: (body: Shorten.CreatePayload) => encryptComplexUrl(body),
    onSuccess,
    onError,
  });

  return {
    mutate,
    mutateAsync,
  };
};

export const useShortenLink = (compressed: string) => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => fetchRedirectLink(compressed),
    queryKey: ['shorten', 'link', compressed],
    enabled: Boolean(compressed?.trim()),
  });

  return {
    data,
    isLoading,
    error,
  };
};
