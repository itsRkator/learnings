import { Component, model } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  imports: [],
  templateUrl: './rectangle.component.html',
  styleUrl: './rectangle.component.css',
})
export class RectangleComponent {
  // Native Approach: Uses Zone.js
  // @Input({ required: true }) size!: { width: string; height: string };
  // @Output() sizeChange = new EventEmitter<{ width: string; height: string }>();

  // Modern Approach: Using signal (Subscriptions)
  // size = input.required<{ width: string; height: string }>();
  // sizeChange = output<{ width: string; height: string }>();

  // Better Approach: Using model signal
  size = model.required<{ width: string; height: string }>();

  onReset() {
    this.size.set({ width: '200', height: '100' });
  }
}
