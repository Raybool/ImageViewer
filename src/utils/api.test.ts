import { API_SLING, API_UNSPLASH, API_UNSPLASH_TOKEN } from 'src/constants/env';
import { getApiPath } from './api';

describe('Print the path for the api request', () => {
  test('should return the path value if all props are passed correctly', () => {
    expect(getApiPath(0, 0)).toEqual(`${API_SLING}?offset=${0}`);
  });

  test('should return the sec path value if all props are passed correctly', () => {
    expect(getApiPath(1, 0)).toEqual(
      `${API_UNSPLASH}/photos/random?client_id=${API_UNSPLASH_TOKEN}&count=10`
    );
  });
});
