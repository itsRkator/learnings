import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AvailablePlaces } from './places/available-places/available-places';
import { UserPlaces } from './places/user-places/user-places';
import { ErrorService } from './shared/error.service';
import { ErrorModal } from './shared/modal/error-modal/error-modal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AvailablePlaces, UserPlaces, ErrorModal],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly errorService = inject(ErrorService);

  error = this.errorService.error;
}
