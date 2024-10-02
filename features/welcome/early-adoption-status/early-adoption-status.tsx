import { FC } from 'react';

import { Loader } from '@lidofinance/lido-ui';
import { useCsmEarlyAdoption } from 'shared/hooks';
import {
  EligibleBlock,
  ErrorBlock,
  NotEligibleBlock,
  StyledBlock,
} from './styles';
import { MatomoLink } from 'shared/components';
import { MATOMO_CLICK_EVENTS_TYPES } from 'consts/matomo-click-events';

export const EarlyAdoptionStatus: FC = () => {
  const { data: isEligible, error, initialLoading } = useCsmEarlyAdoption();

  if (initialLoading)
    return (
      <StyledBlock>
        <Loader size="medium" />
      </StyledBlock>
    );

  if (error) return <ErrorBlock>{error.message}</ErrorBlock>;

  // TODO: start date
  if (isEligible)
    return (
      <>
        <EligibleBlock>
          You are eligible to join the CSM during the Early Adoption period!
        </EligibleBlock>
        <p>
          The permissionless phase of the CSM Mainnet is expected in spring
          2025, stay tuned for the updates
        </p>
      </>
    );

  // TODO: start date
  return (
    <>
      <NotEligibleBlock>
        You are not eligible to join the CSM Mainnet during the Early Adoption
        period
      </NotEligibleBlock>
      <p>
        The permissionless phase of the CSM Mainnet is expected in spring 2025.
        <br />
        Reach out on the{' '}
        <MatomoLink
          matomoEvent={MATOMO_CLICK_EVENTS_TYPES.clickDiscordLink}
          href="https://discord.com/invite/lido"
          target="_blank"
        >
          Lido Discord
        </MatomoLink>{' '}
        in case of any questions.
      </p>
    </>
  );
};
