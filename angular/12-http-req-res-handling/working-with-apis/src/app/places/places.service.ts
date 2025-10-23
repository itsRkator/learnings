import { Injectable, signal } from '@angular/core';

import { type Place as PlaceType } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<PlaceType[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {}

  loadUserPlaces() {}

  addPlaceToUserPlaces(place: PlaceType) {}

  removeUserPlace(place: PlaceType) {}
}
