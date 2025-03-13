import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  // Native: Using Zone.js approach
  // @Input({ required: true }) image!: { src: string; alt: string };
  // @Input({required: true}) title!: string;
  // Signals: A modern Approach
  fileDetails = input.required<{ src: string; alt: string }>();
  title = input.required<string>();
}
