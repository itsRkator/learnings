import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

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
  
  // Accessing the host element by DI as well as constructor
  // private readonly hostElement = inject(ElementRef);
  constructor(private readonly hostElement: ElementRef) {}

  onClick() {
    console.log('Clicked');
    console.log(this.hostElement);
  }
}
