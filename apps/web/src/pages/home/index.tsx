import { Stack, Title } from '@mantine/core';
import Head from 'next/head';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Stack spacing="lg">
      <Title order={2}>Users</Title>
    </Stack>
  </>
);

export default Home;
