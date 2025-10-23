import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PlacesContainer } from '../places-container/places-container';
import { type Place as PlaceType } from '../place.model';
import { catchError, map, throwError } from 'rxjs';
import { Places } from '../places';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  imports: [PlacesContainer, Places],
  templateUrl: './user-places.html',
  styleUrl: './user-places.css',
})
export class UserPlaces implements OnInit {
  isFetching = signal(false);
  error = signal('');

  private readonly placesService = inject(PlacesService);
  private readonly destroyRef = inject(DestroyRef);

  places = this.placesService.loadedUserPlaces;

  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.placesService.loadUserPlaces().subscribe({
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

  onRemovePlace(place: PlaceType) {
    const subscription = this.placesService.removeUserPlace(place).subscribe();

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
