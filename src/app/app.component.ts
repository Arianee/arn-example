import { Component } from '@angular/core';
import { ArnClient } from '@arianee/arn-client';

declare const arnClient: ArnClient;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  version = arnClient.version
}
