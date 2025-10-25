import { Component, input } from '@angular/core';
import { type Task as TaskType } from './task/task.model';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  // Router params of the parent won't accessible by default via input by the child route
  // Need to be explicitly inherited via the withRouterConfig({ paramsInheritanceStrategy: 'always' }) in the provideRouter config
  userId = input.required<string>();

  userTasks: TaskType[] = [];
}
