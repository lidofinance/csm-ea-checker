import { FC, PropsWithChildren } from 'react';
import { Link } from '@lidofinance/lido-ui';
import {
  BannerHeader,
  BlockStyled,
  ContentWrapper,
  CSMLogo,
  Wrapper,
} from './styles';
import { useUserConfig } from 'config/user-config';

export const WelcomeBanner: FC<PropsWithChildren> = ({ children }) => {
  const { earlyAdoptionListUrl } = useUserConfig();
  return (
    <Wrapper>
      <BlockStyled>
        <ContentWrapper>
          <CSMLogo />
          <BannerHeader>Early Adoption checker</BannerHeader>
          <p>
            During Early Adoption period, only{' '}
            <Link href={earlyAdoptionListUrl} target="_blank">
              curated community stakers
            </Link>{' '}
            are eligible to join CSM. After the end of the period, CSM entry
            will be fully permissionless.
          </p>
        </ContentWrapper>
        {children}
      </BlockStyled>
    </Wrapper>
  );
};
