import { useMutation } from 'react-query';

import queryClient from 'query-client';
import { apiService } from 'services';

import { Product } from 'resources/product/product.types';

export function useCreateProduct<T>() {
  const createProduct = (data: T) => apiService.post('/products/', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return useMutation<Product, unknown, T>(createProduct, {
    onSuccess: (data) => {
      queryClient.setQueryData(['product'], data);
    },
  });
}
