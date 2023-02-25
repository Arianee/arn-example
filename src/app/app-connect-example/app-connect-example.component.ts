import {Component, Input} from "@angular/core"

@Component({
  selector: "app-connect-example",
  templateUrl: "./app-connect-example.component.html",
  styleUrls: ["./app-connect-example.component.css"]
})
export class AppConnectExampleComponent {
  @Input()
  connectMsg = 'Connect'

  @Input()
  disconnectMsg = 'Disconnect'
}
