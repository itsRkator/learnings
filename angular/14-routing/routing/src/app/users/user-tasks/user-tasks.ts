import {
  AfterContentInit,
  afterEveryRender,
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  inject,
  Input,
  input,
  OnInit,
} from '@angular/core';
import { UsersService } from '../users.service';
import {
  ActivatedRoute,
  RouterOutlet,
  RouterLinkWithHref,
  RouterLink,
  ResolveFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  MaybeAsync,
  RedirectCommand,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  imports: [
    RouterOutlet,
    // RouterLink,
    RouterLinkWithHref,
  ],
  templateUrl: './user-tasks.html',
  styleUrl: './user-tasks.css',
})
export class UserTasks implements OnInit {
  private readonly usersService: UsersService = inject(UsersService);

  // Different Methods to extract dynamic route params
  // Using signals
  // userId = input.required<string>();
  // userName = computed(() => this.usersService.users.find((u) => u.id === this.userId())?.name);

  // Using Static Data
  // message = input.required<string>();

  // Using resolver functions
  // userName = input.required<string>();

  // Using Input Decorator
  // selectedUserId: string = '';
  // userName: string = '';
  // @Input({ required: true })
  // set userId(id: string) {
  //   this.selectedUserId = id;
  //   this.userName = this.usersService.users.find((u) => u.id === this.selectedUserId)?.name ?? '';
  // }

  // Using ActivatedRoute Observables
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  userName: string = '';

  ngOnInit(): void {
    // console.log(this.message());
    // console.log(this.activatedRoute.snapshot);
    // console.log(this.activatedRoute.snapshot.paramMap.get('userId')); // Won't get re-executed as it is just a snapshot not subscription or signal so only once
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userName =
          this.usersService.users.find((u) => u.id === paramMap.get('userId'))?.name ?? '';
      },
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
    // Getting access to the Static and Resolver data of the route
    const subscription2 = this.activatedRoute.data.subscribe({
      next: (data) => {
        console.log(data);
      },
    });
    this.destroyRef.onDestroy(() => {
      subscription2.unsubscribe();
    });
  }
}

export const resolveUserName: ResolveFn<string> = (
  activatedRouteSnapshot: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
): string => {
  const usersService: UsersService = inject(UsersService);
  const userName =
    usersService.users.find((u) => u.id === activatedRouteSnapshot.paramMap.get('userId'))?.name ??
    '';
  return userName;
};
