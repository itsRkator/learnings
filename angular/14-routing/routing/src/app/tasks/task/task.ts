import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Card } from '../../shared/card/card';
import { TasksService } from '../tasks.service';
import { type Task as TaskType } from './task.model';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<TaskType>();
  private tasksService = inject(TasksService);

  onComplete() {
    this.tasksService.removeTask(this.task().id);
  }
}
