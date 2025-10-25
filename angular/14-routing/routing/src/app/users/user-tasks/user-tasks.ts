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
import { ActivatedRoute, RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';

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
export class UserTasks {
  private readonly usersService: UsersService = inject(UsersService);

  // Different Methods to extract dynamic route params
  // Using signals
  userId = input.required<string>();
  userName = computed(() => this.usersService.users.find((u) => u.id === this.userId())?.name);

  // Using Input Decorator
  // selectedUserId: string = '';
  // userName: string = '';
  // @Input({ required: true })
  // set userId(id: string) {
  //   this.selectedUserId = id;
  //   this.userName = this.usersService.users.find((u) => u.id === this.selectedUserId)?.name ?? '';
  // }

  // Using Observables
  // private readonly activatedRoute = inject(ActivatedRoute);
  // private readonly destroyRef = inject(DestroyRef);
  // userName: string = '';

  // ngOnInit(): void {
  //   const subscription = this.activatedRoute.paramMap.subscribe({
  //     next: (paramMap) => {
  //       this.userName =
  //         this.usersService.users.find((u) => u.id === paramMap.get('userId'))?.name ?? '';
  //     },
  //   });

  //   this.destroyRef.onDestroy(() => {
  //     subscription.unsubscribe();
  //   });
  // }
}
