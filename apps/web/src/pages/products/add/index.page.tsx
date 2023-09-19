import {
  Button,
  FileButton,
  Group,
  Image,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useEffect, useState } from 'react';

const AddProduct = () => {
  const [file, setFile] = useState<File | null>();
  const [objectPreview, setObjectPreview] = useState<any>();

  useEffect(() => {
    if (file) {
      setObjectPreview(URL.createObjectURL(file));
    }
  }, [file]);

  return (
    <Stack w="50%">
      <Title size="h2">Create new product</Title>
      <Group>
        <Image
          src={objectPreview || '../images/placeholder.jpg'}
          width={180}
          height={180}
          alt="Product image"
          radius="md"
        />
        <FileButton
          onChange={(f) => {
            setFile(f);
          }}
          accept="image/png,image/jpeg"
        >
          {(props) => (
            <Button color="gray" variant="outline" {...props}>
              <Text weight={600}>Upload photo</Text>
            </Button>
          )}
        </FileButton>
      </Group>

      <TextInput
        mt="lg"
        width="50%"
        label="Title of the product"
        placeholder="Enter title of the product..."
        size="sm"
      />
      <TextInput
        width="50%"
        label="Price"
        placeholder="Enter price of the product..."
        size="sm"
        type="number"
      />
      <Button w="30%" ml="auto" size="sm">
        Upload product
      </Button>
    </Stack>
  );
};

export default AddProduct;
