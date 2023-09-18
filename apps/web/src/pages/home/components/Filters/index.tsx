import {
  Card,
  Flex,
  Space,
  Stack,
  Text,
  TextInput,
  Title,
  UnstyledButton,
} from '@mantine/core';
import { IconX } from '@tabler/icons-react';

const Filters = () => (
  <Card>
    <Flex justify="space-between" align="center">
      <Title size="md">Filters</Title>
      <UnstyledButton>
        <Flex align="center" gap={5}>
          <Text size="sm" color="gray">
            Reset all
          </Text>
          <IconX color="gray" size={16} />
        </Flex>
      </UnstyledButton>
    </Flex>
    <Space h="xl" />
    <Stack>
      <Text size="md" weight="bolder">
        Price
      </Text>
      <Flex gap={5}>
        <Flex
          align="center"
          p={2}
          px={10}
          style={{
            borderWidth: 1,
            borderColor: '#DEE2E6',
            borderStyle: 'solid',
            borderRadius: 4,
          }}
        >
          <Text color="gray" size="sm">
            From:
          </Text>
          <TextInput size="xs" variant="unstyled" />
        </Flex>
        <Flex
          align="center"
          p={2}
          px={10}
          style={{
            borderWidth: 1,
            borderColor: '#DEE2E6',
            borderStyle: 'solid',
            borderRadius: 4,
          }}
        >
          <Text color="gray" size="sm">
            To:
          </Text>
          <TextInput size="xs" variant="unstyled" />
        </Flex>
      </Flex>
    </Stack>
  </Card>
);

export default Filters;
