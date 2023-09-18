import {
  Button,
  Card,
  Divider,
  Grid,
  Group,
  Tabs,
  TabsValue,
  Text,
  Title,
} from '@mantine/core';
import Head from 'next/head';
import { useState } from 'react';
import CardTab from './components/Cart';
import HistoryTab from './components/History';

const Products = () => {
  const [activeTab, setActiveTab] = useState<TabsValue>('cart');

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <Grid columns={12} align="start">
        <Grid.Col span={8}>
          <Tabs
            variant="unstyled"
            styles={{ tab: { paddingLeft: 0, paddingTop: 0, marginRight: 20 } }}
            defaultValue={activeTab}
            onTabChange={(tabValue) => setActiveTab(tabValue)}
          >
            <Tabs.List>
              <Tabs.Tab value="cart">
                <Title
                  size="h4"
                  color={activeTab === 'history' ? 'gray' : 'black'}
                >
                  My Cart
                </Title>
              </Tabs.Tab>
              <Tabs.Tab value="history">
                <Title
                  size="h4"
                  color={activeTab !== 'history' ? 'gray' : 'black'}
                >
                  History
                </Title>
              </Tabs.Tab>
            </Tabs.List>

            <CardTab />

            <HistoryTab />
          </Tabs>
        </Grid.Col>
        <Grid.Col span={3} offset={1}>
          {activeTab === 'cart' && (
            <Card padding="lg" radius="md" withBorder>
              <Text size="md" weight="bolder">
                Summary
              </Text>
              <Divider my="lg" />
              <Group position="apart">
                <Text color="gray">Total price:</Text>
                <Text weight="bold">$1,200</Text>
              </Group>
              <Button mt={30} fullWidth radius="md" color="blue">
                Checkout
              </Button>
            </Card>
          )}
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Products;
