import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LifecycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  lifecycleComponentIsVisible = false;
  lifecycleInputText =
    'Some Random Number: ' + (Math.random() * 100).toFixed(2);

  onToggleLifecycleComponentVisibility() {
    this.lifecycleComponentIsVisible = !this.lifecycleComponentIsVisible;
  }

  onChangeLifecycleInputText() {
    this.lifecycleInputText =
      'Some Random Number: ' + (Math.random() * 100).toFixed(2);
  }
}
