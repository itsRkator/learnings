import { Component, input, output } from '@angular/core';
import { type Place as PlaceType } from './place.model';

@Component({
  selector: 'app-places',
  imports: [],
  templateUrl: './places.html',
  styleUrl: './places.css',
})
export class Places {
  places = input.required<PlaceType[]>();
  selectPlace = output<PlaceType>();

  onSelectPlace(place: PlaceType) {
    this.selectPlace.emit(place);
  }
}
