import { FC } from 'react';

import { Link, Loader } from '@lidofinance/lido-ui';
import { useCsmEarlyAdoption } from 'shared/hooks';
import {
  EligibleBlock,
  ErrorBlock,
  NotEligibleBlock,
  StyledBlock,
} from './styles';

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
          Permissionless CSM mainnet is expected in spring 2025, stay tuned for
          the updates
        </p>
      </>
    );

  // TODO: start date
  return (
    <>
      <NotEligibleBlock>
        You are not eligible to join the CSM mainnet during the Early Adoption
        period
      </NotEligibleBlock>
      <p>
        The permissionless phase of the CSM mainnet is expected in spring 2025.
        <br />
        Reach out on the{' '}
        <Link href="https://discord.com/invite/lido" target="_blank">
          Lido Discord
        </Link>{' '}
        in case of any questions.
      </p>
    </>
  );
};
