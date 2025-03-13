import {
  AfterViewInit,
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterViewInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  // private readonly destroyRef = inject(DestroyRef); // Alternative to the Dependency Injection through the Construction function.

  constructor(private readonly destroyRef: DestroyRef) {
    effect((onCleanUp) => {
      console.log(this.currentStatus());

      const timer = setTimeout(() => {
        console.log(
          `Current number of tasks:${Math.ceil(Math.random() * 100)}`
        );
      }, 1000);

      onCleanUp(() => {
        clearTimeout(timer);
      });
    });
  }

  ngOnInit(): void {
    console.log('On Init');
    const interval = setInterval(() => {
      const randomValue = Math.random();
      if (randomValue < 0.5) {
        this.currentStatus.set('online');
      } else if (randomValue < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit(): void {
    console.log('After View Init');
  }
}
