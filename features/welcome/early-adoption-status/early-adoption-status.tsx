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

  if (isEligible)
    return (
      <>
        <EligibleBlock>
          You are eligible to join the CSM testnet during the Early Adoption
          period!
        </EligibleBlock>
        <p>
          We are waiting for you at{' '}
          <Link href="https://csm.testnet.fi">csm.testnet.fi</Link>
        </p>
      </>
    );

  return (
    <>
      <NotEligibleBlock>
        You are not eligible to join the CSM testnet during the Early Adoption
        period
      </NotEligibleBlock>
      <p>
        The permissionless phase of the CSM testet will start mid July. Check
        out the blog post to see how you can get to the EA list for CSM mainnet.
        Reach out on the{' '}
        <Link href="https://discord.com/invite/lido" target="_blank">
          Lido Discord
        </Link>{' '}
        in case of any questions.
      </p>
    </>
  );
};
