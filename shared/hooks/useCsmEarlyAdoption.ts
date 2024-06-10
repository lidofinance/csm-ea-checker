import { useLidoSWR } from '@lido-sdk/react';
import { useUserConfig } from 'config/user-config';
import { STRATEGY_IMMUTABLE } from 'consts/swr-strategies';
import invariant from 'tiny-invariant';
import { FetcherError, standardFetcher } from 'utils';
import { Address, useAccount } from 'wagmi';

// TODO: check match CSEarlyAdoption.treeRoot
export const useCsmEarlyAdoptionList = (config = STRATEGY_IMMUTABLE) => {
  const { earlyAdoptionListUrl: path } = useUserConfig();

  return useLidoSWR<Address[], FetcherError>(
    path ? path : null,
    standardFetcher,
    config,
  );
};

export const useCsmEarlyAdoption = () => {
  const { address } = useAccount();
  const { data: list, ...swr } = useCsmEarlyAdoptionList();
  invariant(address, 'Address should be defined');

  return { ...swr, data: list?.includes(address) };
};
