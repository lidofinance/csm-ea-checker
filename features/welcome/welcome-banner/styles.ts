import { Block } from '@lidofinance/lido-ui';
import styled from 'styled-components';
import LogoImg from 'assets/csm.png';

export const BannerHeader = styled.h3`
  font-size: 48px; // @style
  line-height: 52px; // @style
  font-weight: 600;
  color: var(--lido-color-text);
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaceMap.md}px;

  color: var(--lido-color-textSecondary);
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  line-height: ${({ theme }) => theme.fontSizesMap.xl}px;
`;

export const BlockStyled = styled(Block)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaceMap.xxl}px;
  border-radius: 32px; // @style

  text-align: center;
  color: var(--lido-color-text);
  font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
  line-height: ${({ theme }) => theme.fontSizesMap.lg}px;
`;

export const Wrapper = styled.div``;

export const CSMLogo = styled.img.attrs({
  alt: '',
  src: LogoImg.src,
})`
  width: 55%;
  display: flex;
  align-self: center;
  margin-bottom: -8%;
`;
