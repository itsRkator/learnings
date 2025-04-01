import { Component, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { LearningResourcesComponent } from './components/learning-resources/learning-resources.component';
import { AuthService } from './components/auth/auth.service';
import { AuthDirective } from './components/auth/auth.directive';
import { LogDirective } from './components/log.directive';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AuthComponent,
    AuthDirective,
    LearningResourcesComponent,
    LogDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private readonly authService: AuthService) {}

  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
