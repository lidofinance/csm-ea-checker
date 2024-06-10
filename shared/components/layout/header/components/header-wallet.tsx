import { FC } from 'react';
import { useWeb3 } from 'reef-knot/web3-react';
import { Button, Connect } from 'shared/wallet';

const HeaderWallet: FC = () => {
  const { active } = useWeb3();

  return (
    <>
      {active ? (
        <Button data-testid="accountSectionHeader" />
      ) : (
        <Connect size="sm" />
      )}
    </>
  );
};

export default HeaderWallet;
