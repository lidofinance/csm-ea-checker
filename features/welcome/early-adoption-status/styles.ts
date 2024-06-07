import { Block } from '@lidofinance/lido-ui';
import styled from 'styled-components';

export const StyledBlock = styled(Block)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--lido-color-text);
  font-size: ${({ theme }) => theme.fontSizesMap.sm}px;
  line-height: ${({ theme }) => theme.fontSizesMap.xl}px;
  font-weight: bold;
`;

export const EligibleBlock = styled(StyledBlock)`
  background: linear-gradient(97.63deg, #befce2 5.91%, #cdefed 66.16%);
`;

export const NotEligibleBlock = styled(StyledBlock)`
  background: #d8e0ea;
`;

export const ConsumedBlock = styled(StyledBlock)`
  background: linear-gradient(97.63deg, #f3befc 5.91%, #cdefd0 66.16%);
`;

export const ErrorBlock = styled(StyledBlock)`
  color: var(--lido-color-error);
  background: var(--lido-color-warningBackground);
  font-weight: normal;
`;
