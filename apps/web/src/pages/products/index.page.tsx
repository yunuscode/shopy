import {
  Badge,
  Button,
  Card,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from '@mantine/core';
import PlusIcon from './components/icons/plus';

const ProductPage = () => (
  <Stack>
    <Title size="h2">Product page</Title>

    <SimpleGrid cols={5}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
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
      </Card>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section pos="relative">
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={160}
            alt="Norway"
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

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Norway Fjord Adventures</Text>
        </Group>
      </Card>
    </SimpleGrid>
  </Stack>
);

export default ProductPage;
