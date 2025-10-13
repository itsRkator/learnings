import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';
import { type User as UserType } from './user.model';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // Accepting inputs using Decorators
  @Input({ required: true }) user!: UserType;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // Accepting inputs using Signals (Input signals are readonly)
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  // imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() {
    // Accepting inputs using Decorators
    this.select.emit(this.user.id);
  }
}
