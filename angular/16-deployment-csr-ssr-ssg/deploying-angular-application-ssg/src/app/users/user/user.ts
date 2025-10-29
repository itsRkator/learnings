import { Component, computed, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';

import { type User as UserType } from './user.model';

@Component({
  selector: 'app-user',
  imports: [RouterLinkActive, RouterLinkWithHref],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user = input.required<UserType>();

  imagePath = computed(() => 'users/' + this.user().avatar);
}
