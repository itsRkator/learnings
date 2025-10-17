import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLog]',
  host: {
    '(click)': 'onLog()',
  },
})
export class LogDirective {
  constructor(private readonly hostElement: ElementRef) {}

  onLog() {
    console.log('Clicked!!');
    console.log(this.hostElement.nativeElement);
  }
}
