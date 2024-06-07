import { Link } from '@lidofinance/lido-ui';
import styled from 'styled-components';

export const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 0;
  gap: ${({ theme }) => theme.spaceMap.md}px;
`;

export const SectionHeaderStyle = styled.div`
  display: flex;
  align-items: start;
`;

export const SectionTitleStyle = styled.h2`
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSizesMap.md}px;
  line-height: 1.3em;
  margin-right: auto;
  color: var(--lido-color-text);
`;

export const SectionHeaderLinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  width: fit-content;

  &:hover svg {
    transform: translateX(2px);
  }
`;

export const SectionContentStyle = styled.div``;
