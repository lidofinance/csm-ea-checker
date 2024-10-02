import { MATOMO_CLICK_EVENTS_TYPES } from 'consts/matomo-click-events';
import { MatomoLink } from 'shared/components';
import { ContentWrapper } from './styles';
import { Text } from '@lidofinance/lido-ui';

// TODO: update links
const LINKS = [
  {
    title: 'Solo-stakers list curated by Rated',
    link: 'https://github.com/rated-network/solo-stakers',
  },
  {
    title: 'CSM-related Galxe OATs holders with 6+ points',
    link: 'https://app.galxe.com/quest/lido/leaderboard',
  },
  {
    title: 'Obol Techne credential holders',
    link: 'https://research.lido.fi/t/community-staking-module/5917/46',
  },
  {
    title: 'Solo-stakers list curated by StakeCat',
    link: 'https://github.com/Stake-Cat/Solo-Stakers',
  },
  {
    title: 'Good performers from the CSM Testnet',
    link: 'https://github.com/lidofinance/lido-oracle/tree/feat/perf-data-collector',
  },
  {
    title: 'Purchasers of Dappnode Home x Lido before September 30th',
    link: 'https://dappnode.com/collections/hot-releases/products/home-lido',
  },
];

export const Content = () => (
  <ContentWrapper>
    <p>
      This is a simple interface where you can check if your address is on the
      CSM Early Adoption (EA) list for mainnet. The Early Adoption list for CSM
      mainnet uses six main sources of addresses:
    </p>
    <ul>
      {LINKS.map(({ title, link }, i) => (
        <li key={i}>
          {link ? (
            <MatomoLink
              matomoEvent={MATOMO_CLICK_EVENTS_TYPES.clickSourceLink}
              href={link}
              target="_blank"
            >
              {title}
            </MatomoLink>
          ) : (
            title
          )}
        </li>
      ))}
    </ul>
    <p>
      <MatomoLink
        matomoEvent={MATOMO_CLICK_EVENTS_TYPES.clickLearMoreLink}
        href="https://research.lido.fi/t/community-staking-module/5917/62"
        target="_blank"
      >
        More info about EA List formation
      </MatomoLink>
    </p>
    <p>
      If you assume your address is in one of these sources, please connect the
      corresponding wallet to this page to check if you’re eligible to join CSM
      in the Early Adoption phase, or check it manually in the{' '}
      <MatomoLink
        matomoEvent={MATOMO_CLICK_EVENTS_TYPES.clickJsonSource}
        href="https://github.com/lidofinance/community-staking-module/blob/develop/artifacts/mainnet/early-adoption/addresses.json"
        target="_blank"
      >
        .json
      </MatomoLink>{' '}
      file
    </p>
  </ContentWrapper>
);
