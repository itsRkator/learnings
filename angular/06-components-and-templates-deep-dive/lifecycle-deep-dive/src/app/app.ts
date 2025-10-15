import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lifecycle } from './lifecycle/lifecycle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Lifecycle],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  lifecycleComponentIsVisible = false;
  lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;

  onToggleLifecycleComponentVisibility() {
    this.lifecycleComponentIsVisible = !this.lifecycleComponentIsVisible;
  }

  onChangeLifecycleInputText() {
    this.lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;
  }
}
