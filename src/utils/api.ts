import { API_SLING, API_UNSPLASH, API_UNSPLASH_TOKEN } from 'src/constants/env';
import { SuccessAPI } from 'src/types';

export const getApiPath = (stockID: 0 | 1, offset: number) => {
  switch (stockID) {
    case 0:
      return `${API_SLING}?offset=${offset}`;
    case 1:
      return `${API_UNSPLASH}/photos/random?client_id=${API_UNSPLASH_TOKEN}&count=10`;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getResultFromStock = (stockID: 0 | 1, request: any) => {
  switch (stockID) {
    case 0:
      return request as SuccessAPI;
    case 1:
      return {
        success: true,
        total_photos: 0,
        message: '',
        offset: 0,
        limit: 0,
        photos: request.map(
          (item: {
            urls: string;
            slug: string;
            user: { id: number };
            id: number;
            description: string;
          }) => ({
            url: item.urls.small,
            title: item.slug,
            user: item.user.id,
            id: item.id,
            description: item.description,
          })
        ),
      } as SuccessAPI;
  }
};
