import { FC } from 'react';

import { Link } from '@lidofinance/lido-ui';
import { useAccount } from 'shared/hooks';
import { Connect } from 'shared/wallet';
import { EarlyAdoptionStatus } from './early-adoption-status';
import { WelcomeBanner } from './welcome-banner';
import { Content } from './welcome-banner/content';

export const Welcome: FC = () => {
  const { isConnected } = useAccount();
  return (
    <WelcomeBanner>
      {isConnected ? (
        <EarlyAdoptionStatus />
      ) : (
        <>
          <Content />
          <Connect fullwidth />
          <Link>Learn more about Early Adoption</Link>
        </>
      )}
    </WelcomeBanner>
  );
};
