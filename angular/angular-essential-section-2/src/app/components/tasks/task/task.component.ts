import { Component, inject, Input } from '@angular/core';

import { type Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  private readonly tasksService = inject(TasksService); // Alternative dependency injection to constructor based approach
  // constructor(private readonly tasksService: TasksService){}

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
