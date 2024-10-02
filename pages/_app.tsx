import { AppProps } from 'next/app';
import Head from 'next/head';
import 'nprogress/nprogress.css';
import { memo } from 'react';

import { CookiesTooltip, ToastContainer } from '@lidofinance/lido-ui';
import { initMatomo } from '@lidofinance/analytics-matomo';

import { config } from 'config';
import { withCsp } from 'config/csp';
import { Providers } from 'providers';
import { BackgroundGradient } from 'shared/components/background-gradient/background-gradient';
import { nprogress } from 'utils';

initMatomo(config.matomoHost);

// Visualize route changes
nprogress();

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

const MemoApp = memo(App);

const AppWrapper = (props: AppProps): JSX.Element => {
  const { ...rest } = props;

  return (
    <Providers>
      {/* see https://nextjs.org/docs/messages/no-document-viewport-meta */}
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>CSM Early Adoption eligibility checker | Lido</title>
      </Head>
      <BackgroundGradient
        width={1560}
        height={784}
        style={{
          opacity: 'var(--lido-color-darkThemeOpacity)',
        }}
      />
      <ToastContainer />
      <MemoApp {...rest} />
      <CookiesTooltip />
    </Providers>
  );
};

export default config.ipfsMode || process.env.NODE_ENV === 'development'
  ? AppWrapper
  : withCsp(AppWrapper);
