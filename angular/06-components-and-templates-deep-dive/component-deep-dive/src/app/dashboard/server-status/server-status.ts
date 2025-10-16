import {
  AfterViewInit,
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
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

  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');

  constructor() {
    effect((onCleanUp) => {
      const timer = setTimeout(() => {
        console.log('This is here to check the onCleanUp');

        onCleanUp(() => {
          clearTimeout(timer);
        });
      }, 1000);
    });
  }

  ngOnInit(): void {
    const interval = setInterval(() => {
      console.log('On Init');

      const random = Math.random();

      if (random < 0.5) {
        this.currentStatus.set('online');
      } else if (random < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
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
