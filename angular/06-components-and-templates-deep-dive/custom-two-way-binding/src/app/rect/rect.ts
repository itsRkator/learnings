import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  imports: [],
  templateUrl: './rect.html',
  styleUrl: './rect.css',
})
export class Rect {
  // Todo: Implement custom two-way binding
  // @Input({ required: true }) size!: { width: string; height: string };
  // @Output() sizeChange = new EventEmitter<{ width: string; height: string }>();

  size = model.required<{ width: string; height: string }>();

  onReset() {
    // this.sizeChange.emit({
    //   width: '100',
    //   height: '100',
    // });

    this.size.set({
      width: '100',
      height: '100',
    });
  }
}
