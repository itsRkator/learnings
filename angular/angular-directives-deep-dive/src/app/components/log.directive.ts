import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLog]',
  host: {
    '(click)': 'onLog()',
  },
})
export class LogDirective {
  constructor(private readonly elementRef: ElementRef) {}

  onLog(): void {
    console.log('Clicked!!');
    console.log(this.elementRef.nativeElement);
  }
}
