import { useContractSWR, useLidoSWR } from '@lido-sdk/react';
import { StandardMerkleTree } from '@openzeppelin/merkle-tree';
import { getCSMEarlyAdoptionTreeLink } from 'consts/csm-early-adoption';
import {
  STRATEGY_CONSTANT,
  STRATEGY_EAGER,
  STRATEGY_IMMUTABLE,
} from 'consts/swr-strategies';
import { useMemo } from 'react';
import { standardFetcher } from 'utils';
import { Address } from 'wagmi';
import { useAccount } from './use-account';
import { useCSEarlyAdoptionRPC } from './useCsmContracts';

type EATreeLeaf = [string]; // [address]

interface StandardMerkleTreeData<T extends any[]> {
  format: 'standard-v1';
  tree: string[];
  values: {
    value: T;
    treeIndex: number;
  }[];
  leafEncoding: string[];
}

const findProofInTree = (
  tree: StandardMerkleTree<EATreeLeaf>,
  address: Address,
) => {
  const entry = Array.from(tree.entries()).find(
    ([, value]) => value[0] === address,
  );

  if (entry) {
    return tree.getProof(entry[0]);
  }

  return undefined;
};

// TODO: check match CSEarlyAdoption.treeRoot
export const useCsmEarlyAdoptionTree = (config = STRATEGY_IMMUTABLE) => {
  const { chainId } = useAccount();
  const treeLink = getCSMEarlyAdoptionTreeLink(chainId);
  const contract = useCSEarlyAdoptionRPC();

  return useLidoSWR(
    ['csm-ea', treeLink],
    async () => {
      if (!treeLink) return undefined;
      const treeJson = await standardFetcher<
        StandardMerkleTreeData<EATreeLeaf>
      >(treeLink, { mode: 'cors' });

      const treeRoot = await contract.TREE_ROOT();

      const tree = StandardMerkleTree.load(treeJson);

      if (treeRoot !== tree.root) {
        throw new Error('Mismatch tree root');
      }

      return tree;
    },
    config,
  );
};

export const useCsmEarlyAdoptionProof = () => {
  const { address } = useAccount();
  const { data: tree, ...swr } = useCsmEarlyAdoptionTree();

  // TODO: awaiter
  const proofData = useMemo(() => {
    return tree && address ? findProofInTree(tree, address) : undefined;
  }, [address, tree]);

  return { ...swr, data: proofData };
};

export const useCsmEarlyAdoptionTreeRoot = (config = STRATEGY_CONSTANT) => {
  return useContractSWR({
    contract: useCSEarlyAdoptionRPC(),
    method: 'TREE_ROOT',
    params: [],
    config,
  });
};

export const useCsmEarlyAdoptionConsumed = (config = STRATEGY_EAGER) => {
  const { address } = useAccount();

  return useContractSWR({
    contract: useCSEarlyAdoptionRPC(),
    method: 'isConsumed',
    params: [address],
    config,
  });
};

export const useCsmEarlyAdoption = () => {
  const {
    data: proof,
    loading: isProofLoading,
    error: proofError,
  } = useCsmEarlyAdoptionProof();
  const {
    data: consumed,
    loading: isConsumedLoading,
    error: consumedError,
  } = useCsmEarlyAdoptionConsumed();

  // const proofError = undefined;
  // const proof = true;
  // const consumed = true;

  return {
    error: (proofError || consumedError) as Error | undefined,
    loading: isProofLoading || isConsumedLoading,
    isEligible: !!proof,
    isConsumed: !!consumed,
  };
};
