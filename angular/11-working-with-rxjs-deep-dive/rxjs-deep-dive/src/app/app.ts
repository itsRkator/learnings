import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, { initialValue: 0 });
  // interval = signal(0);
  // doubleInterval = computed(() => this.interval() * 2);
  customInterval$ = new Observable((subscriber) => {
    // subscriber.error();
    let timesExecuted = 0;
    const interval = setInterval(() => {
      if (timesExecuted > 3) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log('Emitting new value....');
      subscriber.next({ message: 'New Value' });
      timesExecuted++;
    }, 2000);
  });
  private destroyRef = inject(DestroyRef);

  constructor() {
    // effect(() => {
    //   console.log(`Clicked button ${this.clickCount()} times.`);
    // });
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.interval.update((prevINtervalNumber) => prevINtervalNumber + 1);
    // }, 1000);
    // const subscription = interval(1000)
    //   .pipe(map((val, index) => val * 2))
    //   .subscribe({
    //     next: (val) => {
    //       console.log(val);
    //     },
    //     complete: () => {},
    //     error: () => {},
    //   });
    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });

    this.customInterval$.subscribe({
      next: (value) => {
        console.log(value);
      },
      complete: () => {
        console.log('COMPLETED!');
      },
      error: (err) => {
        console.log(err);
      },
    });

    const anotherSubscription = this.clickCount$.subscribe({
      next: (val) => {
        console.log(`Clicked button ${this.clickCount()} times.`);
      },
    });

    this.destroyRef.onDestroy(() => anotherSubscription.unsubscribe());
  }

  onClick() {
    this.clickCount.update((prevCount) => prevCount + 1);
  }
}
