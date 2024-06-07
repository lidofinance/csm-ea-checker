import { FC } from 'react';

import { Loader } from '@lidofinance/lido-ui';
import { useCsmEarlyAdoption } from 'shared/hooks/useCsmEarlyAdoptionProof';
import {
  ConsumedBlock,
  EligibleBlock,
  ErrorBlock,
  NotEligibleBlock,
  StyledBlock,
} from './styles';

export const EarlyAdoptionStatus: FC = () => {
  const { isEligible, isConsumed, error, loading } = useCsmEarlyAdoption();

  if (loading)
    return (
      <StyledBlock>
        <Loader size="medium" />
      </StyledBlock>
    );

  if (error) return <ErrorBlock>{error.message}</ErrorBlock>;

  if (isConsumed)
    return (
      <ConsumedBlock>
        You have already joined CSM during Early Adoption period
      </ConsumedBlock>
    );

  if (isEligible)
    return (
      <EligibleBlock>
        You are eligible to join CSM during Early Adoption period
      </EligibleBlock>
    );

  return (
    <NotEligibleBlock>
      You are not eligible to join CSM during Early Adoption period
    </NotEligibleBlock>
  );
};
