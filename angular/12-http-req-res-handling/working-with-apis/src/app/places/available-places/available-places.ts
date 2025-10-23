import { Component, signal } from '@angular/core';

import { PlacesContainer } from '../places-container/places-container';
import { Places } from '../places';
import { type Place as PlaceType } from '../place.model';

@Component({
  selector: 'app-available-places',
  imports: [PlacesContainer, Places],
  templateUrl: './available-places.html',
  styleUrl: './available-places.css',
})
export class AvailablePlaces {
  places = signal<PlaceType[] | undefined>(undefined);
}
