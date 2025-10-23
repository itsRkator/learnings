import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AvailablePlaces } from './places/available-places/available-places';
import { UserPlaces } from './places/user-places/user-places';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AvailablePlaces, UserPlaces],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('working-with-apis');
}
