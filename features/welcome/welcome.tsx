import { FC } from 'react';

import { useAccount } from 'shared/hooks';
import { Connect } from 'shared/wallet';
import { EarlyAdoptionStatus } from './early-adoption-status';
import { WelcomeBanner } from './welcome-banner';

export const Welcome: FC = () => {
  const { isConnected } = useAccount();
  return (
    <WelcomeBanner>
      {isConnected ? <EarlyAdoptionStatus /> : <Connect fullwidth />}
    </WelcomeBanner>
  );
};
