import { memo, FC } from 'react';
import { RoutePath } from 'routes';
import {
  Header as LayoutHeader,
  Container,
  Tabs,
  Group,
  Indicator,
  UnstyledButton,
} from '@mantine/core';
import { Link } from 'components';
import { LogoImage } from 'public/images';

import { accountApi } from 'resources/account';

import ShadowLoginBanner from './components/ShadowLoginBanner';

import CartSvg from './components/icons/cartIcon';
import LogoutIcon from './components/icons/logoutIcon';

const Header: FC = () => {
  const { data: account } = accountApi.useGet();
  const { mutate: logout } = accountApi.useSignOut();

  if (!account) return null;

  return (
    <LayoutHeader height="72px">
      {account.isShadow && <ShadowLoginBanner email={account.email} />}
      <Container
        sx={() => ({
          minHeight: '72px',
          padding: '0 32px',
          display: 'flex',
          flex: '1 1 auto',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#f8f9fa',
        })}
        fluid
      >
        <Link type="router" href={RoutePath.Home}>
          <LogoImage />
        </Link>
        <Tabs color="gray" variant="pills" radius="xl" defaultValue="gallery">
          <Tabs.List>
            <Link type="router" href={RoutePath.Home} underline={false}>
              <Tabs.Tab value="/">Marketpkace</Tabs.Tab>
            </Link>

            <Link type="router" href={RoutePath.Products} underline={false}>
              <Tabs.Tab value="/products">Products</Tabs.Tab>
            </Link>
          </Tabs.List>
        </Tabs>
        <Group spacing="lg">
          <Link>
            <Indicator inline label="2" size={18}>
              <CartSvg />
            </Indicator>
          </Link>
          <UnstyledButton onClick={() => logout()}>
            <Indicator disabled>
              <LogoutIcon />
            </Indicator>
          </UnstyledButton>
        </Group>
      </Container>
    </LayoutHeader>
  );
};

export default memo(Header);
