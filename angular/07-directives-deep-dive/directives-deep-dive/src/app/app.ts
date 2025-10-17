import { Component, computed, signal } from '@angular/core';
// import { NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { Auth } from './auth/auth';
import { AuthService } from './auth/auth.service';
import { LearningResources } from './learning-resources/learning-resources';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LearningResources,
    Auth,
    // NgIf,
    // NgFor,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private readonly authService: AuthService) {}
  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
