import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-messages-list',
  imports: [],
  templateUrl: './messages-list.html',
  styleUrl: './messages-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesList {
  messages = input.required<string[]>();

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
