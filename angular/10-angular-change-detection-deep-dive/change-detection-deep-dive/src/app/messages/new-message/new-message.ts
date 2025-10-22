import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-message',
  imports: [FormsModule],
  templateUrl: './new-message.html',
  styleUrl: './new-message.css',
})
export class NewMessage {
  add = output<string>();
  enteredText = signal('');

  get debugOutput() {
    console.log('[NewMessage] "debugOutput" binding re-evaluated.');
    return 'NewMessage Component Debug Output';
  }

  onSubmit() {
    this.add.emit(this.enteredText());
    this.enteredText.set('');
  }
}
