import getConfigNext from 'next/config';

const { publicRuntimeConfig } = getConfigNext();

export type PreConfigType = {
  BASE_PATH_ASSET: string;
} & typeof publicRuntimeConfig;

// `getPreConfig()` needs for internal using in 'config/groups/*'
// Do not use `getPreConfig()` outside of 'config/groups/*'
export const getPreConfig = (): PreConfigType => {
  const BASE_PATH_ASSET = publicRuntimeConfig.basePath ?? '';

  return {
    BASE_PATH_ASSET,

    ...publicRuntimeConfig,
  };
};

// `preConfig` needs for external internal in 'config/groups/*'
// Not use `preConfig` outside of 'config/groups/*'
export const preConfig = getPreConfig();
