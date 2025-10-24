import { Component } from '@angular/core';
import { type Task as TaskType } from './task/task.model';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  userTasks: TaskType[] = [];
}
