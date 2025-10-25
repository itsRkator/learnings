import {
  AfterContentInit,
  afterEveryRender,
  afterNextRender,
  Component,
  computed,
  inject,
  Input,
  input,
  OnInit,
} from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  imports: [],
  templateUrl: './user-tasks.html',
  styleUrl: './user-tasks.css',
})
export class UserTasks {
  private readonly usersService: UsersService = inject(UsersService);

  // Using signals
  // userId = input.required<string>();
  // userName = computed(() => this.usersService.users.find((u) => u.id === this.userId())?.name);

  // Using Input Decorator
  selectedUserId: string = '';
  userName: string = '';
  @Input({ required: true })
  set userId(id: string) {
    this.selectedUserId = id;
    this.userName = this.usersService.users.find((u) => u.id === this.selectedUserId)?.name!;
  }
}
