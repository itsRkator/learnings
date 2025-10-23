import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Places } from '../places';
import { type Place as PlaceType } from '../place.model';
import { PlacesContainer } from '../places-container/places-container';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  imports: [PlacesContainer, Places],
  templateUrl: './available-places.html',
  styleUrl: './available-places.css',
})
export class AvailablePlaces implements OnInit {
  places = signal<PlaceType[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');

  private readonly placesService = inject(PlacesService);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.placesService.loadAvailablePlaces().subscribe({
      next: (places) => {
        this.places.set(places);
      },
      complete: () => {
        this.isFetching.set(false);
      },
      error: (err: Error) => {
        this.error.set(err.message);
        this.isFetching.set(false);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onSelectPlace(selectedPlace: PlaceType) {
    const subscription = this.placesService.addPlaceToUserPlaces(selectedPlace).subscribe({
      next: (responseData) => {
        console.log(responseData);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
