import App from "./App.vue"
import "./main.css"

import {ArnHttpClientFactory} from "@arianee/arn-client"
import "@arianee/arn-components"  // Register ARN web components
import Vue from "vue"

const clientFactory = new ArnHttpClientFactory()
clientFactory.createConfigFromUrl("https://arn-server-test-prod.arianee.com/testproject").then(arnConfig => {
  arnConfig.auth.signCallback = () => window.confirm('Ok to sign?')
  const arnClient = clientFactory.create(arnConfig)
  new Vue({
    el: "#app",
    created: function () {
      window.Vue = this
      window.arnClient = arnClient
    },
    render: h => h(App)
  })
})
