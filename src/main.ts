import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { ArnHttpClientFactory } from '@arianee/arn-client';
import '@arianee/arn-components';
import { ArnLogLevel } from '@arianee/arn-types';  // Register ARN web components

const clientFactory = new ArnHttpClientFactory();
clientFactory.createConfigFromUrl('https://arn-server-test-prod.arianee.com/testproject').then(arnConfig => {
  arnConfig.auth.signCallback = async () => window.confirm('Ok to sign?');
  Object.assign(arnConfig.log, {
    logLevels: [
      ArnLogLevel.warn,
      ArnLogLevel.error,
      ArnLogLevel.info,
      ArnLogLevel.debug
    ]
  });
  clientFactory.create(arnConfig);
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
});
