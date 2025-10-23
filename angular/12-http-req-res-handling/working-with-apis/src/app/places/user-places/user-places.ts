import { Component } from '@angular/core';

import { PlacesContainer } from '../places-container/places-container';

@Component({
  selector: 'app-user-places',
  imports: [PlacesContainer],
  templateUrl: './user-places.html',
  styleUrl: './user-places.css',
})
export class UserPlaces {}
