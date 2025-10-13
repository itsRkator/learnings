import { Component, Input } from '@angular/core';
import { type Task as TaskType } from './task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasksService';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskType;

  constructor(private readonly tasksService: TasksService) {}

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
