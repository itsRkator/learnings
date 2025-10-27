import { Component, inject } from '@angular/core';

import { User } from './user/user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  imports: [User],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  private usersService = inject(UsersService);
  users = this.usersService.users;
}
