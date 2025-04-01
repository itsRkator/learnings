// Custom Attribute Directive

import { Directive, ElementRef, input } from '@angular/core';
import { LogDirective } from './components/log.directive';

@Directive({
  selector: 'a[appSafeLink]',
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
  hostDirectives: [LogDirective],
})
export class SafeLinkDirective {
  // private readonly hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  queryParam = input<string>('myapp', { alias: 'appSafeLink' });

  constructor(private readonly hostElementRef: ElementRef<HTMLAnchorElement>) {}

  onConfirmLeavePage(event: MouseEvent): void {
    const wantsToLeave = window.confirm('Do you want to leave the app?');

    if (wantsToLeave) {
      // Using Events parameters
      // const address = (event.target as HTMLAnchorElement).href;

      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href =
        address + '?from=' + this.queryParam();

      return;
    }

    event.preventDefault();
  }
}
