import { Component } from '@angular/core';
import { SafeLinkDirective } from '../safe-link.directive';

@Component({
  selector: 'app-learning-resources',
  imports: [SafeLinkDirective],
  templateUrl: './learning-resources.html',
  styleUrl: './learning-resources.css',
})
export class LearningResources {}
