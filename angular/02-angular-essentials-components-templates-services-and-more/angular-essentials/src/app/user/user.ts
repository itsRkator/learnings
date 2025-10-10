import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // Accepting inputs using Decorators
  @Input({ required: true }) user!: {id: string, name: string; avatar :string}
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
