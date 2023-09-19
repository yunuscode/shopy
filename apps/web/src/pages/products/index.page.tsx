import {
  Badge,
  Button,
  Card,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from '@mantine/core';
import Link from 'next/link';
import { RoutePath } from 'routes';
import { useListProducts } from 'resources/product/product.api';
import { Product } from 'resources/product/product.types';
import PlusIcon from './components/icons/plus';

const ProductPage = () => {
  const { data: products, isLoading } = useListProducts({ myProducts: true });

  return (
    <Stack>
      <Title size="h2">Product page</Title>

      <SimpleGrid cols={5}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Link type="router" href={RoutePath.AddProduct}>
            <UnstyledButton style={{ height: '100%', width: '100%' }}>
              <Flex
                h="100%"
                justify="center"
                direction="column"
                gap={4}
                align="center"
              >
                <Flex
                  w={30}
                  h={30}
                  justify="center"
                  align="center"
                  bg="blue"
                  style={{ borderRadius: 50 }}
                >
                  <PlusIcon />
                </Flex>
                <Text color="blue">New product</Text>
              </Flex>
            </UnstyledButton>
          </Link>
        </Card>
        {isLoading
          && new Array(4).fill(1).map(() => (
            <Skeleton>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section pos="relative">
                  <Image height={160} />
                  <Button
                    top={10}
                    right={10}
                    pos="absolute"
                    variant="light"
                    color="blue"
                    size="sm"
                    radius="md"
                  >
                    Delete
                  </Button>
                  <Badge
                    bottom={10}
                    right={10}
                    pos="absolute"
                    color="pink"
                    variant="light"
                  >
                    On Sale
                  </Badge>
                </Card.Section>

                <Text weight="bold" mt="md" size="lg" />

                <Group position="apart">
                  <Text color="gray">Price</Text>
                  <Text weight="bolder" />
                </Group>
              </Card>
            </Skeleton>
          ))}
        {products?.items.length
          && products?.items.map((item: Product) => (
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section pos="relative">
                <Image
                  src={item.productImageUrl}
                  height={160}
                  alt={`${item.productName}'s photo`}
                />
                <Button
                  top={10}
                  right={10}
                  pos="absolute"
                  variant="light"
                  color="blue"
                  size="sm"
                  radius="md"
                >
                  Delete
                </Button>
                <Badge
                  bottom={10}
                  right={10}
                  pos="absolute"
                  color="pink"
                  variant="light"
                >
                  On Sale
                </Badge>
              </Card.Section>

              <Text weight="bold" mt="md" size="lg">
                {item.productName}
              </Text>

              <Group position="apart">
                <Text color="gray">Price</Text>
                <Text weight="bolder">
                  $
                  {item.price}
                </Text>
              </Group>
            </Card>
          ))}
      </SimpleGrid>
    </Stack>
  );
};

export default ProductPage;
