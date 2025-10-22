import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-new-message',
  imports: [FormsModule],
  templateUrl: './new-message.html',
  styleUrl: './new-message.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewMessage {
  enteredText = signal('');
  // enteredText = '';

  constructor(private readonly messagesService: MessagesService) {}

  get debugOutput() {
    console.log('[NewMessage] "debugOutput" binding re-evaluated.');
    return 'NewMessage Component Debug Output';
  }

  onSubmit() {
    this.messagesService.addMessage(this.enteredText());
    this.enteredText.set('');

    // this.messagesService.addMessage(this.enteredText);
    // this.enteredText = '';
  }
}
