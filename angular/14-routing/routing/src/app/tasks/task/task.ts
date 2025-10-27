import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Card } from '../../shared/card/card';
import { TasksService } from '../tasks.service';
import { type Task as TaskType } from './task.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<TaskType>();
  private tasksService = inject(TasksService);
  private readonly router: Router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  onComplete() {
    this.tasksService.removeTask(this.task().id);
    this.router.navigate(['./'], {
      relativeTo: this.activatedRoute,
      onSameUrlNavigation: 'reload',
      queryParamsHandling: 'preserve',
    });
  }
}
