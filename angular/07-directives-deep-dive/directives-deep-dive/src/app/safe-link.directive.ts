import { Directive, ElementRef, inject, input } from '@angular/core';
import { LogDirective } from './log.directive';

@Directive({
  selector: 'a[appSafeLink]',
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
  hostDirectives: [LogDirective],
})
export class SafeLinkDirective {
  queryParam = input('myAngularApp', { alias: 'appSafeLink' });

  constructor(private readonly hostElement: ElementRef<HTMLAnchorElement>) {
    console.log('SafeLinkDirective is active!!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave this page?');

    if (wantsToLeave) {
      const address = this.hostElement.nativeElement.href; // TypeScript-Typecasting

      this.hostElement.nativeElement.href = address.includes('?')
        ? address + `&from=${this.queryParam()}`
        : address + `?from=${this.queryParam()}`;
      return;
    }

    event.preventDefault();
  }
}
