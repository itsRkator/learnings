import { AfterViewInit, Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
// , OnDestroy
export class ServerStatus implements OnInit, AfterViewInit {
  // private interval?: number;
  private destroyRef = inject(DestroyRef);

  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor() {}

  ngOnInit(): void {
    const interval = setInterval(() => {
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

    // Alternative to the OnDestroy lifecycle hook
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit(): void {
    console.log('After view Init');
  }

  // ngOnDestroy(): void {
  //   clearInterval(this.interval);
  // }
}
