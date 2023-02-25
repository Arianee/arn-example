import {Component, Input} from "@angular/core"

@Component({
  selector: "app-if-connected-example",
  templateUrl: "./app-if-connected-example.component.html",
  styleUrls: ["./app-if-connected-example.component.css"]
})
export class AppIfConnectedExampleComponent {
  @Input()
  connectedMsg = 'Connected'

  @Input()
  disconnectedMsg = 'Disconnected'
}
