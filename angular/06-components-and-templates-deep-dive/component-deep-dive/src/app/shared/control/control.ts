import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  // host property add the key value pairs as properties to the host element
  host: {
    class: 'control',
    // event binding
    '(click)': 'onClick()',
  },
})
export class Control {
  // HostBinding should be omitted
  // @HostBinding('class') className = 'control';

  // HostListener is a cleaner and better approach for event binding to the host
  // @HostListener('click') onClick() {
  //   console.log('Clicked');
  // }

  label = input.required<string>();

  onClick() {
    console.log('Clicked');
  }
}
