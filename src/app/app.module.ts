import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"

import {AppComponent} from "./app.component"
import {AppConnectExampleComponent} from "./app-connect-example/app-connect-example.component"
import {AppIfConnectedExampleComponent} from "./app-if-connected-example/app-if-connected-example.component"

@NgModule({
  declarations: [
    AppComponent,
    AppConnectExampleComponent,
    AppIfConnectedExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
