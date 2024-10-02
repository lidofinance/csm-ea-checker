import { FC, PropsWithChildren } from 'react';
import {
  BlockStyled,
  CSMLogo,
  Header,
  Heading,
  Subheader,
  Wrapper,
} from './styles';

export const WelcomeBanner: FC<PropsWithChildren> = ({ children }) => (
  <Wrapper>
    <BlockStyled>
      <Heading>
        <CSMLogo />
        <Header>Early Adoption eligibility checker</Header>
        <Subheader>for CSM mainnet</Subheader>
      </Heading>
      {children}
    </BlockStyled>
  </Wrapper>
);
