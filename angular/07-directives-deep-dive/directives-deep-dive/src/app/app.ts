import { Component, computed, signal } from '@angular/core';
// import { NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { Auth } from './auth/auth';
import { AuthService } from './auth/auth.service';
import { LearningResources } from './learning-resources/learning-resources';
import { AuthDirective } from './auth/auth.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LearningResources, Auth, AuthDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private readonly authService: AuthService) {}
  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
