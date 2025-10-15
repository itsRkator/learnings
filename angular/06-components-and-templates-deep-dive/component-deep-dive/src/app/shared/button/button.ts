import { Component, input } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]', // Component Selector (attribute selector), multi-selector (for button and anchor tags)
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {}
