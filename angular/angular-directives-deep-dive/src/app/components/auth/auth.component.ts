import { Component, signal } from '@angular/core';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { LogDirective } from '../log.directive';

@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  hostDirectives: [LogDirective]
})
export class AuthComponent {
  email = signal<string>('');
  password = signal<string>('');

  constructor(private readonly authService: AuthService) {}

  onSubmit(): void {
    this.authService.authenticate(this.email(), this.password());
  }
}
