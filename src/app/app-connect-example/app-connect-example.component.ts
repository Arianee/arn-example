import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { ArnAuthContext, ArnAuthStatus, ArnClient, ArnConnectionStatus } from '@arianee/arn-client';
import { SignPopupComponent } from './sign-popup/sign-popup.component';
import { IArnAuthContext } from '@arianee/arn-types';

declare const arnClient: ArnClient;

@Component({
  selector: 'app-connect-example',
  templateUrl: './app-connect-example.component.html',
  styleUrls: ['./app-connect-example.component.css']
})
export class AppConnectExampleComponent {
  @Input()
  connectMsg = 'Connect';

  @Input()
  disconnectMsg = 'Disconnect';

  showPopup = false;

  @ViewChild('popup') popup: SignPopupComponent | undefined;

  constructor(private cdr: ChangeDetectorRef) {
    arnClient.auth.config.beforeSign = this.beforeSign.bind(this);
  }

  readonly beforeSign = (context: IArnAuthContext): Promise<boolean> => {
    return new Promise((resolve) => {
      this.showPopup = true;
      this.cdr.detectChanges();
      resolve(true);
    }).then(() => {
      const ctx = context as ArnAuthContext;
      const listener = ctx.status$.subscribe((status: ArnAuthStatus) => {
        if (
          status?.connectionStatus ===
          ArnConnectionStatus.authenticated ||
          status?.connectionStatus ===
          ArnConnectionStatus.disconnected ||
          status?.connectionStatus ===
          ArnConnectionStatus.connected
        ) {
          this.showPopup = false;
          listener.unsubscribe();
        }
      });
      return new Promise<boolean>((resolve, reject) => {
        const popup = this.popup!;
        popup.context = context;
        popup
          .agreeCallback!
          .then((result) => {
            this.showPopup = result;
            resolve(result);
          })
          .catch((e) => {
            reject(e);
          });
      });
    });
  };
}
