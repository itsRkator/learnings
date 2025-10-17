import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemperaturePipe } from './temperature-pipe';
import { SortPipe } from './sort-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, DecimalPipe, TemperaturePipe, SortPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5];

  constructor() {
    this.historicTemperatures.sort((a, b) => (a > b ? 1 : -1));
  }
  onReset(index: number) {
    const updated = [...this.historicTemperatures];
    updated[index] = 18;
    this.historicTemperatures = updated;
  }
}
