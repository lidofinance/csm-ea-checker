import { FC } from 'react';

import { MATOMO_CLICK_EVENTS_TYPES } from 'consts/matomo-click-events';
import { MatomoLink } from 'shared/components';
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
          <MatomoLink
            matomoEvent={MATOMO_CLICK_EVENTS_TYPES.clickLearMoreLink}
            href="https://blog.lido.fi/csm-early-adoption/"
            target="_blank"
          >
            Learn more about Early Adoption
          </MatomoLink>
        </>
      )}
    </WelcomeBanner>
  );
};
