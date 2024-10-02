import { MatomoEventType, trackEvent } from '@lidofinance/analytics-matomo';
import { Metrics as WalletsMetrics } from 'reef-knot/connect-wallet-modal';

export const enum MATOMO_WALLETS_EVENTS_TYPES {
  onClickAmbire = 'onClickAmbire',
  onConnectAmbire = 'onConnectAmbire',
  onClickBlockchaincom = 'onClickBlockchaincom',
  onConnectBlockchaincom = 'onConnectBlockchaincom',
  onClickBrave = 'onClickBrave',
  onConnectBrave = 'onConnectBrave',
  onClickCoin98 = 'onClickCoin98',
  onConnectCoin98 = 'onConnectCoin98',
  onClickCoinbase = 'onClickCoinbase',
  onConnectCoinbase = 'onConnectCoinbase',
  onClickExodus = 'onClickExodus',
  onConnectExodus = 'onConnectExodus',
  onClickGamestop = 'onClickGamestop',
  onConnectGamestop = 'onConnectGamestop',
  onClickImToken = 'onClickImToken',
  onConnectImToken = 'onConnectImToken',
  onClickLedger = 'onClickLedger',
  onConnectLedger = 'onConnectLedger',
  onClickMathWallet = 'onClickMathWallet',
  onConnectMathWallet = 'onConnectMathWallet',
  onClickMetamask = 'onClickMetamask',
  onConnectMetamask = 'onConnectMetamask',
  onClickOperaWallet = 'onClickOperaWallet',
  onConnectOperaWallet = 'onConnectOperaWallet',
  onClickTally = 'onClickTally',
  onConnectTally = 'onConnectTally',
  onClickTrust = 'onClickTrust',
  onConnectTrust = 'onConnectTrust',
  onClickWC = 'onClickWC',
  onConnectWC = 'onConnectWC',
  onClickXdefi = 'onClickXdefi',
  onConnectXdefi = 'onConnectXdefi',
  onClickZenGo = 'onClickZenGo',
  onConnectZenGo = 'onConnectZenGo',
  onClickZerion = 'onClickZerion',
  onConnectZerion = 'onConnectZerion',
  onClickOkx = 'onClickOkx',
  onConnectOkx = 'onConnectOkx',
  onClickPhantom = 'onClickPhantom',
  onConnectPhantom = 'onConnectPhantom',
  onClickBitkeep = 'onClickBitkeep',
  onConnectBitkeep = 'onConnectBitkeep',
}

export const MATOMO_WALLETS_EVENTS: Record<
  MATOMO_WALLETS_EVENTS_TYPES,
  MatomoEventType
> = {
  [MATOMO_WALLETS_EVENTS_TYPES.onClickAmbire]: [
    'CSM_EA_Checker',
    'Click on Ambire wallet',
    'csm_ea_checker_click_ambire',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectAmbire]: [
    'CSM_EA_Checker',
    'Connect Ambire wallet',
    'csm_ea_checker_connect_ambire',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickBlockchaincom]: [
    'CSM_EA_Checker',
    'Click Blockchain.com wallet',
    'csm_ea_checker_click_blockchaincom',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectBlockchaincom]: [
    'CSM_EA_Checker',
    'Connect Blockchain.com wallet',
    'csm_ea_checker_connect_blockchaincom',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickBrave]: [
    'CSM_EA_Checker',
    'Click Brave wallet',
    'csm_ea_checker_click_brave',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectBrave]: [
    'CSM_EA_Checker',
    'Connect Brave wallet',
    'csm_ea_checker_connect_brave',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickCoin98]: [
    'CSM_EA_Checker',
    'Click Coin98 wallet',
    'csm_ea_checker_click_coin98',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectCoin98]: [
    'CSM_EA_Checker',
    'Connect Coin98 wallet',
    'csm_ea_checker_connect_coin98',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickCoinbase]: [
    'CSM_EA_Checker',
    'Click Coinbase Wallet wallet',
    'csm_ea_checker_click_coinbase_wallet',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectCoinbase]: [
    'CSM_EA_Checker',
    'Connect Coinbase Wallet wallet',
    'csm_ea_checker_connect_coinbase_wallet',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickExodus]: [
    'CSM_EA_Checker',
    'Click Exodus wallet',
    'csm_ea_checker_click_exodus',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectExodus]: [
    'CSM_EA_Checker',
    'Connect Exodus wallet',
    'csm_ea_checker_connect_exodus',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickGamestop]: [
    'CSM_EA_Checker',
    'Click Gamestop wallet',
    'csm_ea_checker_click_gamestop',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectGamestop]: [
    'CSM_EA_Checker',
    'Connect Gamestop wallet',
    'csm_ea_checker_connect_gamestop',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickImToken]: [
    'CSM_EA_Checker',
    'Click imToken wallet',
    'csm_ea_checker_click_imtoken',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectImToken]: [
    'CSM_EA_Checker',
    'Connect imToken wallet',
    'csm_ea_checker_connect_imtoken',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickLedger]: [
    'CSM_EA_Checker',
    'Click Ledger wallet',
    'csm_ea_checker_click_ledger',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectLedger]: [
    'CSM_EA_Checker',
    'Connect Ledger wallet',
    'csm_ea_checker_connect_ledger',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickMathWallet]: [
    'CSM_EA_Checker',
    'Click MathWallet wallet',
    'csm_ea_checker_click_mathwallet',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectMathWallet]: [
    'CSM_EA_Checker',
    'Connect MathWallet wallet',
    'csm_ea_checker_connect_mathwallet',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickMetamask]: [
    'CSM_EA_Checker',
    'Click Metamask wallet',
    'csm_ea_checker_click_metamask',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectMetamask]: [
    'CSM_EA_Checker',
    'Connect Metamask wallet',
    'csm_ea_checker_connect_metamask',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickOperaWallet]: [
    'CSM_EA_Checker',
    'Click Opera wallet',
    'csm_ea_checker_click_opera',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectOperaWallet]: [
    'CSM_EA_Checker',
    'Connect Opera wallet',
    'csm_ea_checker_connect_opera',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickTally]: [
    'CSM_EA_Checker',
    'Click Tally wallet',
    'csm_ea_checker_click_tally',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectTally]: [
    'CSM_EA_Checker',
    'Connect Tally wallet',
    'csm_ea_checker_connect_tally',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickTrust]: [
    'CSM_EA_Checker',
    'Click Trust wallet',
    'csm_ea_checker_click_trust',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectTrust]: [
    'CSM_EA_Checker',
    'Connect Trust wallet',
    'csm_ea_checker_connect_trust',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickWC]: [
    'CSM_EA_Checker',
    'Click WalletConnect wallet',
    'csm_ea_checker_click_walletconnect',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectWC]: [
    'CSM_EA_Checker',
    'Connect WalletConnect wallet',
    'csm_ea_checker_connect_walletconnect',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickXdefi]: [
    'CSM_EA_Checker',
    'Click XDEFI wallet',
    'csm_ea_checker_click_xdefi',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectXdefi]: [
    'CSM_EA_Checker',
    'Connect XDEFI wallet',
    'csm_ea_checker_connect_xdefi',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickZenGo]: [
    'CSM_EA_Checker',
    'Click ZenGo wallet',
    'csm_ea_checker_click_zengo',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectZenGo]: [
    'CSM_EA_Checker',
    'Connect ZenGo wallet',
    'csm_ea_checker_connect_zengo',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickZerion]: [
    'CSM_EA_Checker',
    'Click Zerion wallet',
    'csm_ea_checker_click_zerion',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectZerion]: [
    'CSM_EA_Checker',
    'Connect Zerion wallet',
    'csm_ea_checker_connect_zerion',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickOkx]: [
    'CSM_EA_Checker',
    'Click OKX wallet',
    'csm_ea_checker_click_okx',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectOkx]: [
    'CSM_EA_Checker',
    'Connect OKX wallet',
    'csm_ea_checker_connect_okx',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickPhantom]: [
    'CSM_EA_Checker',
    'Click Phantom wallet',
    'csm_ea_checker_click_phantom',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectPhantom]: [
    'CSM_EA_Checker',
    'Connect Phantom wallet',
    'csm_ea_checker_connect_phantom',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickBitkeep]: [
    'CSM_EA_Checker',
    'Click BitKeep wallet',
    'csm_ea_checker_click_bitkeep',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectBitkeep]: [
    'CSM_EA_Checker',
    'Connect BitKeep wallet',
    'csm_ea_checker_connect_bitkeep',
  ],
};

export const walletsMetrics: WalletsMetrics = {
  events: {
    click: {
      handlers: {
        onClickAmbire: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickAmbire);
        },
        onClickBlockchaincom: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickBlockchaincom);
        },
        onClickBrave: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickBrave);
        },
        onClickCoin98: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickCoin98);
        },
        onClickCoinbase: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickCoinbase);
        },
        onClickExodus: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickExodus);
        },
        onClickGamestop: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickGamestop);
        },
        onClickImToken: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickImToken);
        },
        onClickLedger: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickLedger);
        },
        onClickMathWallet: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickMathWallet);
        },
        onClickMetamask: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickMetamask);
        },
        onClickOperaWallet: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickOperaWallet);
        },
        onClickTally: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickTally);
        },
        onClickTrust: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickTrust);
        },
        onClickWalletconnect: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickWC);
        },
        onClickXdefi: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickXdefi);
        },
        onClickZenGo: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickZenGo);
        },
        onClickZerion: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickZerion);
        },
        onClickOkx: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickOkx);
        },
        onClickPhantom: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickPhantom);
        },
        onClickBitkeep: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickBitkeep);
        },
      },
    },
    connect: {
      handlers: {
        onConnectAmbire: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectAmbire);
        },
        onConnectBlockchaincom: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectBlockchaincom);
        },
        onConnectBrave: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectBrave);
        },
        onConnectCoin98: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectCoin98);
        },
        onConnectCoinbase: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectCoinbase);
        },
        onConnectExodus: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectExodus);
        },
        onConnectGamestop: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectGamestop);
        },
        onConnectImToken: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectImToken);
        },
        onConnectLedger: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectLedger);
        },
        onConnectMathWallet: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectMathWallet);
        },
        onConnectMetamask: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectMetamask);
        },
        onConnectOperaWallet: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectOperaWallet);
        },
        onConnectTally: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectTally);
        },
        onConnectTrust: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectTrust);
        },
        onConnectWalletconnect: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectWC);
        },
        onConnectXdefi: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectXdefi);
        },
        onConnectZenGo: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectZenGo);
        },
        onConnectZerion: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectZerion);
        },
        onConnectOkx: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectOkx);
        },
        onConnectPhantom: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectPhantom);
        },
        onConnectBitkeep: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectBitkeep);
        },
      },
    },
  },
};
