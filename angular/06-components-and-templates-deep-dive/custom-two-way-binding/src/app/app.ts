import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Rect } from './rect/rect';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Rect],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  rectSize = {
    width: '100',
    height: '100',
  };
}
