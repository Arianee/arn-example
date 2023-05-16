import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"

import {AppModule} from "./app/app.module"

import {ArnHttpClientFactory} from "@arianee/arn-client"
import "@arianee/arn-components"  // Register ARN web components

const clientFactory = new ArnHttpClientFactory()
clientFactory.createFromUrl("https://arn-server-test-prod.arianee.com/testproject").then(() => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err))
})
