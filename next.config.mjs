// https://nextjs.org/docs/pages/api-reference/next-config-js/basePath
const basePath = process.env.BASE_PATH;

const developmentMode = process.env.NODE_ENV === 'development';

const config = {
  output: 'export',
  basePath,

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    // Fixes a build error with importing Pure ESM modules, e.g. reef-knot
    // Some docs are here:
    // https://github.com/vercel/next.js/pull/27069
    // You can see how it is actually used in v12.3.4 here:
    // https://github.com/vercel/next.js/blob/v12.3.4/packages/next/build/webpack-config.ts#L417
    // Presumably, it is true by default in next v13 and won't be needed
    esmExternals: true,
  },
  webpack(config) {
    config.module.rules.push(
      // Teach webpack to import svg and md files
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.md$/,
        use: 'raw-loader',
      },

      // Needs for `Conditional Compilation`,
      // because we have differences in source code of IPFS widget and NOT IPFS widget
      {
        test: /\.(t|j)sx?$/,
        use: [
          {
            loader: 'webpack-preprocessor-loader',
          },
        ],
      },
    );

    return config;
  },

  // ATTENTION: If you add a new variable you should declare it in `global.d.ts`
  serverRuntimeConfig: {
    // https://nextjs.org/docs/pages/api-reference/next-config-js/basePath
    basePath,
    developmentMode,

    defaultChain: process.env.DEFAULT_CHAIN,
    rpcUrls_1: process.env.EL_RPC_URLS_1,
    rpcUrls_17000: process.env.EL_RPC_URLS_17000,
  },

  // ATTENTION: If you add a new variable you should declare it in `global.d.ts`
  publicRuntimeConfig: {
    basePath,
    developmentMode,
    earlyAdoptionListUrl: process.env.EARLY_ADOPTION_LIST_URL,
    prefillUnsafeElRpcUrls1:
      process.env.PREFILL_UNSAFE_EL_RPC_URLS_1?.split(',') ?? [],
    prefillUnsafeElRpcUrls17000:
      process.env.PREFILL_UNSAFE_EL_RPC_URLS_17000?.split(',') ?? [],
    ipfsMode: false,
    walletconnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,
    supportedChains: process.env?.SUPPORTED_CHAINS?.split(',').map((chainId) =>
      parseInt(chainId, 10),
    ) ?? [17000],
    defaultChain: parseInt(process.env.DEFAULT_CHAIN, 10) || 17000,
    matomoHost: process.env.MATOMO_URL,
  },
};

export default config;
