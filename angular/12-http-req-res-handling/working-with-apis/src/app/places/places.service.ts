import { Injectable, signal } from '@angular/core';

import { type Place as PlaceType } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<PlaceType[]>([]);

  constructor(
    private readonly httpClient: HttpClient,
    private readonly errorService: ErrorService
  ) {}

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces(): Observable<PlaceType[]> {
    return this.fetchPlaces(
      'http://localhost:3000/places',
      'Something went wrong fetching your the available places. Please try again later.'
    );
  }

  loadUserPlaces(): Observable<PlaceType[]> {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'Something went wrong fetching your favorite places. Please try again later.'
    ).pipe(
      tap({
        next: (userPlaces) => {
          this.userPlaces.set(userPlaces);
        },
      })
    );
  }

  addPlaceToUserPlaces(place: PlaceType) {
    const previousPlaces = this.userPlaces();

    if (!previousPlaces.some((p) => p.id === place.id)) {
      this.userPlaces.set([...previousPlaces, place]);
    }

    return this.httpClient.put('http://localhost:3000/user-places', { placeId: place.id }).pipe(
      catchError((err) => {
        this.userPlaces.set(previousPlaces);
        this.errorService.showError('Failed to store selected place.');
        return throwError(() => new Error('Failed to store selected place.'));
      })
    );
  }

  removeUserPlace(place: PlaceType) {
    const previousPlaces = this.userPlaces();

    if (previousPlaces.some((p) => p.id === place.id)) {
      this.userPlaces.set(previousPlaces.filter((p) => p.id !== place.id));
    }

    return this.httpClient.delete(`http://localhost:3000/user-places/${place.id}`).pipe(
      catchError((err) => {
        this.userPlaces.set(previousPlaces);
        this.errorService.showError('Failed to delete place');
        return throwError(() => new Error('Failed to remove the selected place'));
      })
    );
  }

  private fetchPlaces(url: string, errorMessage: string): Observable<PlaceType[]> {
    return this.httpClient.get<{ places: PlaceType[] }>(url).pipe(
      map((value) => value.places),
      catchError((err) => {
        console.log(err);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
