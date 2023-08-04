import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { ArnHttpClientFactory } from '@arianee/arn-client';
import '@arianee/arn-components';

const clientFactory = new ArnHttpClientFactory();
clientFactory.createConfigFromUrl('https://arn-server-test-prod.arianee.com/testproject').then(arnConfig => {
  arnConfig.auth.beforeSign = async () => window.confirm('Ok to sign?');
  clientFactory.create(arnConfig);
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
});
