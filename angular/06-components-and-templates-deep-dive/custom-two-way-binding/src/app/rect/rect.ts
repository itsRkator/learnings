import {
  Component,
  EventEmitter,
  input,
  Input,
  model,
  output,
  Output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-rect',
  imports: [],
  templateUrl: './rect.html',
  styleUrl: './rect.css',
})
export class Rect {
  // @Input({ required: true }) size!: { width: string; height: string };
  // @Output() sizeChange = new EventEmitter<{ width: string; height: string }>();

  // Using signals
  // size = input.required<{width: string; height: string}>();
  // sizeChange = output<{width: string; height: string}>();

  // Using model signal
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
