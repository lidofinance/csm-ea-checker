import { CHAINS, getChainColor } from '@lido-sdk/constants';
import { useSDK } from '@lido-sdk/react';
import { FC } from 'react';
import { useWeb3 } from 'reef-knot/web3-react';
import NoSSRWrapper from 'shared/components/no-ssr-wrapper';

import {
  DotStyle,
  HeaderWalletChainStyle,
  HeaderWalletChainWrapper,
} from '../styles';

const HeaderChain: FC = () => {
  const { active } = useWeb3();
  const { chainId } = useSDK();

  const chainName = CHAINS[chainId];
  const testNet = chainId !== CHAINS.Mainnet;
  const showNet = testNet && active;

  return (
    <NoSSRWrapper>
      {showNet && (
        <HeaderWalletChainWrapper>
          <DotStyle />
          <HeaderWalletChainStyle $color={getChainColor(chainId)}>
            {chainName}
          </HeaderWalletChainStyle>
        </HeaderWalletChainWrapper>
      )}
    </NoSSRWrapper>
  );
};

export default HeaderChain;
