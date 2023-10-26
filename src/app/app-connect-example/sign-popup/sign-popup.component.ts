import { Component, NgZone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IArnAuthContext } from '@arianee/arn-types';

@Component({
  selector: 'arn-sign-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-popup.component.html',
  styleUrls: ['./sign-popup.component.scss'],
})
export class SignPopupComponent implements OnInit {
  context?: IArnAuthContext;
  readonly agreeCallback?: Promise<boolean>;
  private popupResolve?: (value: PromiseLike<boolean> | boolean) => void;

  private popupReject?: (reason?: any) => void;

  waitBeforeRetry = 5;
  retryButtonLabel = `Try again (${this.waitBeforeRetry})`;
  retryCounter = 0;
  retryCount = 0;
  canRetry = false;

  constructor(private ngZone: NgZone) {
    this.agreeCallback = new Promise<boolean>((resolve, reject) => {
      this.popupResolve = resolve;
      this.popupReject = reject;
    });
  }

  ngOnInit() {
    this.startRetryCounter(this.waitBeforeRetry);
  }

  agree(ok: boolean): void {
    if (this.retryCount === 0) {
      this.startRetryCounter(this.waitBeforeRetry);
    }
    this.popupResolve!(ok);
  }

  signAgain(): void {
    this.context!.sign();
  }

  startRetryCounter(waitBeforeRetry: number) {
    this.retryCounter = waitBeforeRetry;
    this.updateRetryButtonLabel();

    const retryInterval = setInterval(() => {
      this.retryCounter -= 1;

      this.ngZone.run(() => {
        this.updateRetryButtonLabel();
      });

      if (this.retryCounter <= 0) {
        clearInterval(retryInterval);
        this.ngZone.run(() => {
          this.canRetry = true;
          this.retryButtonLabel = 'Try again';
        });
      }
    }, 1000);
  }

  private updateRetryButtonLabel() {
    this.retryButtonLabel = `Try again (${this.retryCounter})`;
  }

  onRetryClick() {
    if (!this.canRetry) {
      return;
    }
    this.canRetry = false;
    this.retryCount += 1;
    this.startRetryCounter(this.waitBeforeRetry * (this.retryCount + 1));
    this.signAgain();
  }
}
