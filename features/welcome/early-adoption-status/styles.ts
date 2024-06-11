import { Block, ThemeName } from '@lidofinance/lido-ui';
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
  background: ${({ theme }) =>
    theme.name === ThemeName.light
      ? 'linear-gradient(97.63deg, #befce2 5.91%, #cdefed 66.16%)'
      : 'linear-gradient(97.63deg, #67dcab 5.91%, #50cdc5 66.16%)'};
`;

export const NotEligibleBlock = styled(StyledBlock)`
  background: ${({ theme }) =>
    theme.name === ThemeName.light ? '#d8e0ea' : '#91919c'};
`;

export const ConsumedBlock = styled(StyledBlock)`
  background: linear-gradient(97.63deg, #f3befc 5.91%, #cdefd0 66.16%);
`;

export const ErrorBlock = styled(StyledBlock)`
  color: var(--lido-color-error);
  background: var(--lido-color-warningBackground);
  font-weight: normal;
`;
