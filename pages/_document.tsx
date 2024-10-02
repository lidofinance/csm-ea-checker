import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { createHeadersObject } from 'next-secure-headers';
import { ServerStyleSheet } from 'styled-components';
import { Fonts, LidoUIHead } from '@lidofinance/lido-ui';

import { config } from 'config';
import { contentSecurityPolicy } from 'config/csp';

let host = 'https://lidofinance.github.io';

const secureHeaders = createHeadersObject({ contentSecurityPolicy });
const cspMetaTagContent =
  secureHeaders['Content-Security-Policy'] ??
  secureHeaders['Content-Security-Policy-Report-Only'];

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    if (ctx?.req?.headers?.host) {
      host = `https://${ctx?.req?.headers?.host}`;
    }

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  get metaTitle(): string {
    return 'CSM Early Adoption eligibility checker | Lido';
  }

  get metaDescription(): string {
    return 'A simple interface where you can check if your address is on the CSM Early Adoption (EA) list for mainnet.';
  }

  get metaPreviewImgUrl(): string {
    return `${host}/csm-ea-checker/preview.png`;
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {config.ipfsMode && (
            <meta
              httpEquiv="Content-Security-Policy"
              content={cspMetaTagContent}
            />
          )}
          <link
            rel="manifest"
            href={`${config.BASE_PATH_ASSET}/manifest.json`}
          />
          <link
            rel="icon"
            href={`${config.BASE_PATH_ASSET}/favicon.ico`}
            sizes="any"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href={`${config.BASE_PATH_ASSET}/favicon-512x512.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${config.BASE_PATH_ASSET}/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={`${config.BASE_PATH_ASSET}/favicon-192x192.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${config.BASE_PATH_ASSET}/favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${config.BASE_PATH_ASSET}/favicon-16x16.png`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={this.metaTitle} />
          <meta property="og:description" content={this.metaDescription} />
          <meta property="og:image" content={this.metaPreviewImgUrl} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={this.metaTitle} />
          <meta name="twitter:description" content={this.metaDescription} />
          <meta name="twitter:image:src" content={this.metaPreviewImgUrl} />
          <meta name="twitter:site" content="@lidofinance" />
          <meta name="twitter:creator" content="@lomashuk" />
          <meta name="description" content={this.metaDescription} />
          <meta name="currentChain" content={String(config.defaultChain)} />
          <Fonts />
          <LidoUIHead />
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          {/* <script src={`${config.BASE_PATH_ASSET}/runtime/window-env.js`} /> */}
          <link
            rel="preload"
            href={config.earlyAdoptionListUrl}
            as="fetch"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
