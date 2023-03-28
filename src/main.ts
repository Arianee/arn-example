import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"

import {AppModule} from "./app/app.module"

import {ArnHttpClientFactory} from "@arianee/arn-client"
import "@arianee/arn-components"

const clientFactory = new ArnHttpClientFactory()
clientFactory.createFromUrl("https://arn-server-test-dev.arianee.com/testproject").then(arnClient => {
  (window as any).arnClient = arnClient
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err))
})
