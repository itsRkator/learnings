import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RectangleComponent } from './components/rectangle/rectangle.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, RectangleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  rectangle = { width: '100', height: '100' };

  onResetTriangle() {
    this.rectangle.width = '100';
    this.rectangle.height = '100';
  }
}
