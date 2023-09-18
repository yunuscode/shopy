import { Table, Tabs, Image, Group, Text, UnstyledButton } from '@mantine/core';
import { useStyles } from './styles';

const HistoryTab = () => {
  const styles = useStyles();

  const els = [
    {
      name: 'DJi pro max super 14',
      price: 400,
      quantity: 5,
      url: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
    },
    {
      name: 'DJi pro max super 16',
      price: 400,
      quantity: 5,
      url: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
    },
  ];

  const rows = els.map((element) => (
    <tr key={element.name}>
      <td>
        <Group>
          <Image
            src={element.url}
            width={90}
            height={90}
            radius="md"
            alt={element.name}
          />
          <Text size="md" weight="bolder">
            {element.name}
          </Text>
        </Group>
      </td>
      <td>
        $
        {element.price}
      </td>
      <td>
        <Group>
          <UnstyledButton>-</UnstyledButton>
          <Text>{element.quantity}</Text>
          <UnstyledButton>+</UnstyledButton>
        </Group>
      </td>
    </tr>
  ));

  return (
    <Tabs.Panel value="history" pt="xs">
      <Table variant="unstyled">
        <thead>
          <tr>
            <th className={styles.classes.tableHeads}>Item</th>
            <th>Unit Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Tabs.Panel>
  );
};

export default HistoryTab;
