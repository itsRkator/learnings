import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Messages } from './messages/messages';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter, Messages],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  get debugOutput() {
    console.log('[AppComponent] "debugOutput" binding re-evaluated.');
    return 'AppComponent Component Debug Output';
  }
}
