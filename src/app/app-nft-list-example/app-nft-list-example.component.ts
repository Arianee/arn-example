import {Component, Input, NgZone, OnInit} from "@angular/core"
import {ArnAuthStatus, ArnClient, ArnConnectionStatus} from "@arianee/arn-client"
import {NmpCertificatesResponse} from "@arianee/arn-types"

declare const arnClient: ArnClient

@Component({
  selector: "app-nft-list-example",
  templateUrl: "./app-nft-list-example.component.html",
  styleUrls: ["./app-nft-list-example.component.css"]
})
export class AppNftListExampleComponent implements OnInit{

  foundNFTs: NmpCertificatesResponse[] = []

  @Input()
  tags: string = ""

  disabled = true

  constructor(ngZone: NgZone) {
    // Listen to connection status changes
    let self = this
    arnClient.auth.currentContext$.subscribe(async (authContext) => {
      authContext?.status$.subscribe(async (status) => {
        ngZone.run(async () => {
          self.updateStatus(status)
        })
      })
    })
  }

  ngOnInit(): void {
    this.updateStatus(arnClient.auth.currentContext?.status)
  }

  updateStatus(status?: ArnAuthStatus) {
    const enabled = status?.connectionStatus === ArnConnectionStatus.authenticated
    this.disabled = !enabled
    if (enabled) {
      this.search()
    }
  }

  async search() {
    const tags = this.tags.split(",")
    this.foundNFTs = await arnClient.nft.arianee.getList({filter: {tags}})
  }
}
