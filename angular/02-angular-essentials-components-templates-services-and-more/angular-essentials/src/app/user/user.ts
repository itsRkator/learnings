import { Component, computed, input, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // Accepting inputs using Decorators
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // get imagePath() {
  //   return 'assets/users/' + this.avatar();
  // }

  // Accepting inputs using Signals (Input signals are readonly)
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() {}
}
