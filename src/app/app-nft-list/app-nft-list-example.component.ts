import {Component, Input, NgZone} from "@angular/core"
import {ArnClient, ArnConnectionStatus} from "@arianee/arn-client"
import {NmpGetCertificatesResponse} from "@arianee/arn-types"

declare const arnClient: ArnClient

@Component({
  selector: "app-nft-list-example",
  templateUrl: "./app-nft-list-example.component.html",
  styleUrls: ["./app-nft-list-example.component.css"]
})
export class AppNftListExampleComponent {

  foundNFTs: NmpGetCertificatesResponse[] = []

  @Input()
  tag = ""

  constructor(ngZone: NgZone) {
    // Listen to connection status changes
    arnClient.auth.currentContext$.subscribe(async (authContext) => {
      authContext?.status$.subscribe(async (status) => {
        ngZone.run(async () => {
          if (status?.connectionStatus === ArnConnectionStatus.authenticated) {
            this.foundNFTs = await arnClient.nft.arianee.getList({tags: [this.tag]})
          } else {
            this.foundNFTs = []
          }
        })
      })
    })
  }
}
