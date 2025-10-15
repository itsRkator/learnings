import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit, AfterViewInit, OnDestroy {
  private interval?: number;
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      console.log('On Init');

      const random = Math.random();

      if (random < 0.5) {
        this.currentStatus = 'online';
      } else if (random < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngAfterViewInit(): void {
    console.log('After view Init');
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
