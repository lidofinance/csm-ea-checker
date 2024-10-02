import { MatomoEventType } from '@lidofinance/analytics-matomo';

export const enum MATOMO_CLICK_EVENTS_TYPES {
  connectWallet = 'connectWallet',
  pageView = 'pageView',
  clickJsonSource = 'clickJsonSource',
  clickSourceLink = 'clickSourceLink',
  clickDiscordLink = 'clickDiscordLink',
  clickLearMoreLink = 'clickLearMoreLink',
  clickMoreInfoLink = 'clickMoreInfoLink',
}

export const MATOMO_CLICK_EVENTS: Record<
  MATOMO_CLICK_EVENTS_TYPES,
  MatomoEventType
> = {
  // Global
  [MATOMO_CLICK_EVENTS_TYPES.connectWallet]: [
    'CSM_EA_Checker',
    'Push "Connect wallet" button',
    'csm_ea_checker_connect_wallet',
  ],
  [MATOMO_CLICK_EVENTS_TYPES.pageView]: [
    'CSM_EA_Checker',
    'view page',
    'csm_ea_checker_view_page',
  ],
  [MATOMO_CLICK_EVENTS_TYPES.clickJsonSource]: [
    'CSM_EA_Checker',
    'Click ".json file" link',
    'csm_ea_checker_json_file_link',
  ],
  [MATOMO_CLICK_EVENTS_TYPES.clickSourceLink]: [
    'CSM_EA_Checker',
    'Click one of "source link" link',
    'csm_ea_checker_source_link',
  ],
  [MATOMO_CLICK_EVENTS_TYPES.clickDiscordLink]: [
    'CSM_EA_Checker',
    'Click "discord" link',
    'csm_ea_checker_discord_link',
  ],
  [MATOMO_CLICK_EVENTS_TYPES.clickLearMoreLink]: [
    'CSM_EA_Checker',
    'Click "learn more" link',
    'csm_ea_checker_learn_more_link',
  ],
  [MATOMO_CLICK_EVENTS_TYPES.clickMoreInfoLink]: [
    'CSM_EA_Checker',
    'Click "more info" link',
    'csm_ea_checker_more_info_link',
  ],
};
