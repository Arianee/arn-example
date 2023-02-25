import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"

import {AppModule} from "./app/app.module"

import {ArnServerClientFactory} from "@arianeeprivate/arn-client"
import "@arianeeprivate/arn-components"

const clientFactory = new ArnServerClientFactory()
const projectUrl = "https://arn-server-ysl-v2-staging.arianee.com/yslbeauty"
clientFactory.createConfigFromUrl(projectUrl).then(config => {
  (window as any).arnClient = clientFactory.create(config)
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err))
})
