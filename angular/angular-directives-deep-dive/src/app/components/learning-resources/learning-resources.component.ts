import { Component } from '@angular/core';
import { SafeLinkDirective } from '../../safe-link.directive';
import { LogDirective } from '../log.directive';

@Component({
  selector: 'app-learning-resources',
  imports: [SafeLinkDirective, LogDirective],
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
})
export class LearningResourcesComponent {}
