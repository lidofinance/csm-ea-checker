import { FC } from 'react';
import { LogoLido } from 'shared/components/logos/logos';

import HeaderTheme from './components/header-theme';
import HeaderWallet from './components/header-wallet';
import { HeaderActionsStyle, HeaderStyle } from './styles';

export const Header: FC = () => (
  <HeaderStyle size="full" forwardedAs="header">
    <LogoLido />
    <HeaderActionsStyle>
      <HeaderWallet />
      <HeaderTheme />
    </HeaderActionsStyle>
  </HeaderStyle>
);
