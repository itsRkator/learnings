import { Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TasksService } from '../tasks.service';
import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  Router,
  RouterLink,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule, RouterLink],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  userId = input.required<string>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');
  submitted = signal(false);
  private tasksService = inject(TasksService);
  private readonly router = inject(Router);

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      },
      this.userId()
    );

    this.submitted.set(true);

    this.router.navigate(['/users', this.userId(), 'tasks'], { replaceUrl: true });
  }
}

export const canLeaveEditPage: CanDeactivateFn<NewTask> = (
  component: NewTask,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  if (component.submitted()) {
    return true;
  }

  if (component.enteredTitle() || component.enteredDate() || component.enteredSummary()) {
    return window.confirm('Do you really want to leave? You will loose the entered data.');
  }

  return true;
};
