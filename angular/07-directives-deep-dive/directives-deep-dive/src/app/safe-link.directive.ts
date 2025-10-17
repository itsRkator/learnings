import { Directive, ElementRef, inject, input, ɵisEnvironmentProviders } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('myapp', { alias: 'appSafeLink' });
  constructor(private readonly hostElement: ElementRef<HTMLAnchorElement>) {
    console.log('SafeLinkDirective is active!!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave this page?');

    console.log(this.queryParam());

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
