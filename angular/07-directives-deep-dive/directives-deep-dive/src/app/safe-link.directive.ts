import { Directive, input, ɵisEnvironmentProviders } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('myapp', { alias: 'appSafeLink' });

  constructor() {
    console.log('SafeLinkDirective is active!!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave this page?');

    console.log(this.queryParam());

    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href; // TypeScript-Typecasting

      (event.target as HTMLAnchorElement).href = address.includes('?')
        ? address + `&from=${this.queryParam()}`
        : address + `?from=${this.queryParam()}`;
      return;
    }

    event.preventDefault();
  }
}
