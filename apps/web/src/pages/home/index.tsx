import {
  Button,
  Card,
  Flex,
  Grid,
  Group,
  Image,
  Pagination,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
  UnstyledButton,
} from '@mantine/core';
import { IconArrowsDownUp, IconCircleX, IconSearch } from '@tabler/icons-react';
import Head from 'next/head';
import Filters from './components/Filters';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Grid columns={14}>
      <Grid.Col span={3}>
        <Filters />
      </Grid.Col>
      <Grid.Col span="auto">
        <Stack spacing={3}>
          <TextInput
            icon={<IconSearch size={20} />}
            placeholder="Type to search..."
            styles={{ input: { fontSize: 14 } }}
          />
          <Flex align="center" justify="space-between">
            <Text weight="bolder">12 results</Text>
            <Select
              icon={<IconArrowsDownUp size={14} />}
              size="sm"
              data={[
                {
                  value: 'newest',
                  label: 'Sort by newest',
                },
                {
                  value: 'oldest',
                  label: 'Sort by oldest',
                },
              ]}
              variant="unstyled"
              defaultValue="newest"
            />
          </Flex>
          <Flex>
            <UnstyledButton
              p={5}
              px={20}
              style={{
                background: 'white',
                borderRadius: 50,
                border: '1px solid #DEE2E6',
              }}
            >
              <Flex align="center">
                <Text size="sm" mr={5}>
                  1500-2000
                </Text>
                <IconCircleX size={18} />
              </Flex>
            </UnstyledButton>
          </Flex>
          <SimpleGrid mt={10} cols={3}>
            {new Array(6).fill(1).map(() => (
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={210}
                    alt="Norway"
                  />
                </Card.Section>

                <Title size="h3" mt="md">
                  DJI Pro
                </Title>

                <Group position="apart" mb="xs" align="center">
                  <Text size="sm" color="gray" weight={500}>
                    Price:
                  </Text>
                  <Text size="xl" weight="bolder">
                    $300
                  </Text>
                </Group>

                <Button color="blue" fullWidth mt="md" radius="md">
                  Add to cart
                </Button>
              </Card>
            ))}
          </SimpleGrid>
          <Pagination mt="md" mb="lg" total={10} />
        </Stack>
      </Grid.Col>
    </Grid>
  </>
);

export default Home;
