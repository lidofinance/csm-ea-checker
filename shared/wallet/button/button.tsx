import { useSDK } from '@lido-sdk/react';
import { ButtonProps } from '@lidofinance/lido-ui';
import { FC } from 'react';
import { useWalletModal } from '../wallet-modal/use-wallet-modal';

import { AddressBadge } from '../components/address-badge/address-badge';
import { WalledButtonStyle, WalledButtonWrapperStyle } from './styles';

export const Button: FC<ButtonProps> = (props) => {
  const { onClick, ...rest } = props;
  const { openModal } = useWalletModal();
  const { account } = useSDK();

  return (
    <WalledButtonStyle
      size="sm"
      variant="text"
      color="secondary"
      onClick={() => openModal({})}
      {...rest}
    >
      <WalledButtonWrapperStyle>
        <AddressBadge address={account} />
      </WalledButtonWrapperStyle>
    </WalledButtonStyle>
  );
};
