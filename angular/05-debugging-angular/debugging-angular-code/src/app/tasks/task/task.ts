import { Component, inject, Input } from '@angular/core';
import { TasksService } from '../tasks.service';
import { type Task as TaskType } from './task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskType;
  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
