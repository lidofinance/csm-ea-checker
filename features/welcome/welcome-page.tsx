import { FC, useEffect } from 'react';

import { Layout } from 'shared/components';
import { Welcome } from './welcome';
import { trackMatomoEvent } from 'utils';
import { MATOMO_CLICK_EVENTS_TYPES } from 'consts/matomo-click-events';

export const WelcomePage: FC = () => {
  useEffect(() => {
    trackMatomoEvent(MATOMO_CLICK_EVENTS_TYPES.pageView);
  }, []);

  return (
    <Layout>
      <Welcome />
    </Layout>
  );
};
