import { CookieThemeProvider } from '@lidofinance/lido-ui';
import { FC, PropsWithChildren } from 'react';

import { ConfigProvider } from 'config';
import { GlobalStyle } from 'styles';

import { ModalProvider } from './modal-provider';
import Web3Provider from './web3';

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <ConfigProvider>
    <CookieThemeProvider>
      <GlobalStyle />
      <Web3Provider>
        <ModalProvider>{children}</ModalProvider>
      </Web3Provider>
    </CookieThemeProvider>
  </ConfigProvider>
);
