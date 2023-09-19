import {
  Button,
  Card,
  Group,
  Image,
  Skeleton,
  Text,
  Title,
} from '@mantine/core';
import { Product } from 'resources/product/product.types';

const ProductCard = ({
  item,
  isLoading = false,
}: {
  item?: Product;
  isLoading?: boolean;
}) => (
  <Skeleton visible={isLoading}>
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={item && item.productImageUrl}
          height={210}
          alt={`${item && item.productName}'s image`}
        />
      </Card.Section>

      <Title size="h3" mt="md">
        {item && item.productName}
      </Title>

      <Group position="apart" mb="xs" align="center">
        <Text size="sm" color="gray" weight={500}>
          Price:
        </Text>
        <Text size="xl" weight="bolder">
          $
          {item && item.price}
        </Text>
      </Group>

      <Button color="blue" fullWidth mt="md" radius="md">
        Add to cart
      </Button>
    </Card>
  </Skeleton>
);

export default ProductCard;
