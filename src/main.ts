import './init.js';
import { ArianeeWalletLogo, ArnHttpClientConfig, ArnHttpClientFactory } from '@arianee/arn-client';
import '@arianee/arn-components';
import { ConnectedStatusExample } from './ConnectedStatusExample';
import { NftListExample } from './NftListExample';
import { TranslationExample } from './TranslationExample';
import { ConnectProgExample } from './ConnectProgExample';
import { ConnectTagExample } from './ConnectTagExample';
import {
  ArnConnectorType,
  ArnValidAuthConfig,
  IArnAuthContext,
  Web3ModalV2DesktopBehaviorMode
} from '@arianee/arn-types';
import { polygon } from '@wagmi/chains';

const walletConnectProjectId = '161a26cf3fa8e9340f7d0c153dcd2b64';
const clientFactory = new ArnHttpClientFactory();
const web3ModalV2Config: ArnValidAuthConfig = {
  autoConnect: false,
  persist: true,
  connectorType: ArnConnectorType.Web3ModalV2,
  sigMessage: `By signing this message, you give use access to the list of NFTs in your Wallet. We can't have the right to modify your Wallet`,
  // trySwitchChainNumber: ChainId.PolygonMainnet, // Request to switch to Polygon few seconds after connection
  signCallback: async (_context: IArnAuthContext) => window.confirm('Ok to sign ?'),
  options: {
    projectId: walletConnectProjectId,
    wcVersion: 2,
    desktopBehavior: {
      mode: Web3ModalV2DesktopBehaviorMode.ArianeeOrWalletConnect,
      universalLink: 'com.arianee.Wallet://',
      primaryLogoUrl: ArianeeWalletLogo,
      primaryText: 'Scan with arianee wallet',
      secondaryText: 'Scan with another wallet'
    },
    // removeDesktopWallets: true, // Remove all desktop wallets (default: false)
    chains: [polygon],
    defaultChain: polygon
    // termsOfServiceUrl: 'https://www.google.fr', // Can be used to add a link to the terms of service (useful for design simplification)
    // privacyPolicyUrl: 'https://www.google.fr', // Can be used to add a link to the privacy policy (useful for design simplification)
  }
};

const config: ArnHttpClientConfig = {
  log: {},
  serverUrl: 'https://arn-server-test-dev.arianee.com/testproject',
  // auth: web3ModalV2Config,
  auth: web3ModalV2Config
};
clientFactory.create(config);

const connectTagExample = new ConnectTagExample('Connect your wallet', 'Disconnect your wallet');
const connectTagAnchor = document.querySelector('#arn-connect-tag');
if (connectTagAnchor) {
  connectTagExample.render(connectTagAnchor);
}

const connectProgExample = new ConnectProgExample();
const connectProgAnchor = document.querySelector('#arn-connect-prog');
if (connectProgAnchor) {
  connectProgExample.render(connectProgAnchor);
}

const ifConnectedExample = new ConnectedStatusExample('You are connected with wallet', 'You are disconnected.');
const ifConnectedAnchor = document.querySelector('#arn-if-connected-example');
if (ifConnectedAnchor) {
  ifConnectedExample.render(ifConnectedAnchor);
}

const nftListAnchor = document.querySelector('#nft-list-example')!;
const nftListExample = new NftListExample(nftListAnchor, ['myTag']);
if (nftListAnchor) {
  nftListExample.render();
}

const i18nAnchor = document.querySelector('#translation-example')!;
const translationExample = new TranslationExample(i18nAnchor);
if (i18nAnchor) {
  translationExample.render();
}
