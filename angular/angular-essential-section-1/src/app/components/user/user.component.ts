import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Native Decorator Approach

  // Input from Parent
  @Input({ required: true }) user!: User;
  @Input({required: true}) selected!: boolean;

  // Output to Parent
  @Output() select = new EventEmitter<string>();

  // Modern Signal Approach
  // Input from Parent
  // NOTE: Signal inputs are just readonly
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  // Output to Parent
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
