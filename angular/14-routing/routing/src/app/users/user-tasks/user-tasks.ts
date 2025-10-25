import { Component, computed, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  imports: [],
  templateUrl: './user-tasks.html',
  styleUrl: './user-tasks.css',
})
export class UserTasks implements OnInit {
  userId = input.required<string>();

  private readonly usersService: UsersService = inject(UsersService);

  userName = computed(() => this.usersService.users.find((u) => u.id === this.userId())?.name);

  ngOnInit(): void {}
}
