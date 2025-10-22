import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-info-message',
  imports: [],
  templateUrl: './info-message.html',
  styleUrl: './info-message.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoMessage {
  get debugOutput() {
    console.log('[InfoMessages] "debugOutput" binding re-evaluated.');
    return 'InfoMessage Component Debug Output';
  }

  onLog() {
    console.log('Clicked!');
  }
}
