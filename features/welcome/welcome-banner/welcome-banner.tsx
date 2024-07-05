import { FC, PropsWithChildren } from 'react';
import {
  BlockStyled,
  CSMLogo,
  Header,
  Heading,
  Subheader,
  Wrapper,
} from './styles';
import { Link } from '@lidofinance/lido-ui';

export const WelcomeBanner: FC<PropsWithChildren> = ({ children }) => (
  <Wrapper>
    <BlockStyled>
      <Heading>
        <CSMLogo />
        <Header>Early Adoption eligibility checker</Header>
        <Subheader>
          for <Link href="https://csm.testnet.fi">CSM Holesky testnet</Link>
        </Subheader>
      </Heading>
      {children}
    </BlockStyled>
  </Wrapper>
);
