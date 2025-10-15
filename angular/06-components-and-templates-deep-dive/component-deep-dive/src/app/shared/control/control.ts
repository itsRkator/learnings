import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  // host property add the key value pairs as properties to the host element
  host: {
    class: 'control'
  }
})
export class Control {
  label = input.required<string>();
}
