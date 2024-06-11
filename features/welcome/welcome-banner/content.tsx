import { Link } from '@lidofinance/lido-ui';
import { ContentWrapper } from './styles';

const LINKS = [
  {
    title: 'Solo-stakers list curated by Rated',
    link: 'https://github.com/rated-network/solo-stakers',
  },
  {
    title: 'CSM-related Galxe OATs holders with 5+ points',
    link: 'https://app.galxe.com/quest/lido/GCPoDUBedQ',
  },
  {
    title: 'Obol Techne credential holders',
    link: 'https://research.lido.fi/t/community-staking-module/5917/46',
  },
  {
    title: 'Solo-stakers list curated by StakeCat',
    link: 'https://github.com/Stake-Cat/Solo-Stakers',
  },
];

export const Content = () => (
  <ContentWrapper>
    <p>
      This is a simple interface where you can check if your address is on the
      CSM Early Adoption (EA) list for Holesky testnet. The Early Adoption list
      for CSM testnet uses four main sources of addresses:
    </p>
    <p>
      <ul>
        {LINKS.map(({ title, link }, i) => (
          <li key={i}>
            <Link href={link} target="_blank">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </p>
    <p>
      If you assume your address is in one of these sources, please connect the
      corresponding wallet to this page to check if you’re eligible to join CSM
      in the Early Adoption phase, or check it manually in the{' '}
      <Link
        href="https://github.com/lidofinance/community-staking-module/blob/main/artifacts/holesky/early-adoption/addresses.json"
        target="_blank"
      >
        .json
      </Link>{' '}
      file
    </p>
  </ContentWrapper>
);
