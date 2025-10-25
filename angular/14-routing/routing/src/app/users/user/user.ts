import { Component, computed, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { type User as UserType } from './user.model';

@Component({
  selector: 'app-user',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user = input.required<UserType>();

  imagePath = computed(() => 'users/' + this.user().avatar);
}
