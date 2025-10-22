import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NewMessage } from './new-message/new-message';
import { MessagesList } from './messages-list/messages-list';

@Component({
  selector: 'app-messages',
  imports: [NewMessage, MessagesList],
  templateUrl: './messages.html',
  styleUrl: './messages.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Messages {
  messages = signal<string[]>([]);

  get debugOutput() {
    console.log('[Messages] "debugOutput" binding re-evaluated.');
    return 'Messages Component Debug Output';
  }

  onAddMessage(message: string) {
    this.messages.update((oldMessages) => [...oldMessages, message]);
  }
}
