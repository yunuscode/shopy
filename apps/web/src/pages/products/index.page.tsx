import { Stack, Title } from '@mantine/core';
import Head from 'next/head';

const Products = () => (
  <>
    <Head>
      <title>Products</title>
    </Head>
    <Stack spacing="lg">
      <Title order={2}>Products</Title>
    </Stack>
  </>
);

export default Products;
