import {Component, Input, NgZone, OnInit} from "@angular/core"
import {ArnClient, ArnConnectionStatus} from "@arianee/arn-client"

declare const arnClient: ArnClient

@Component({
  selector: "app-if-connected-example",
  templateUrl: "./app-if-connected-example.component.html",
  styleUrls: ["./app-if-connected-example.component.css"]
})
export class AppIfConnectedExampleComponent implements OnInit {
  @Input()
  connectedMsg = "Connected"

  @Input()
  disconnectedMsg = "Disconnected"

  walletAddress? = ""

  constructor(protected ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.walletAddress = ""
    // Listen to auth status to refresh wallet address
    arnClient.auth.currentContext$.subscribe((authContext) => {
      authContext?.status$.subscribe((status) => {
        this.ngZone.run(() => {
          switch (status?.connectionStatus) {
            case ArnConnectionStatus.authenticated:
              this.walletAddress = status.address
              break
            case ArnConnectionStatus.disconnected:
              this.walletAddress = ""
              break
          }
        })
      })
    })
  }
}
