import { CHAINS } from '@lido-sdk/constants';

export type ChainTreeLinkMap = Partial<Record<CHAINS, string>>;

export const LINKS_BY_NETWORK: ChainTreeLinkMap = {
  // @note local mainnetish
  [CHAINS.Mainnet]:
    'https://raw.githubusercontent.com/lidofinance/community-staking-module/main/artifacts/devnet-1/early-adoption/merkle-tree.json',
  // @note devnet.0
  [CHAINS.Holesky]: undefined,
};

export const getCSMEarlyAdoptionTreeLink = (chainId: CHAINS | undefined) => {
  if (!chainId) {
    throw new Error(`Chain is not supported`);
  }
  return LINKS_BY_NETWORK[chainId];
};
