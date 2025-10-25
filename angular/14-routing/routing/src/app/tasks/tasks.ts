import { Component, computed, inject, input } from '@angular/core';
import { type Task as TaskType } from './task/task.model';
import { Task } from './task/task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  // Router params of the parent won't accessible by default via input by the child route
  // Need to be explicitly inherited via the withRouterConfig({ paramsInheritanceStrategy: 'always' }) in the provideRouter config
  // Directly accessible using the ActivatedRoute's paramMap Observables
  userId = input.required<string>();

  private readonly tasksService: TasksService = inject(TasksService);
  userTasks = computed(() =>
    this.tasksService.allTasks().filter((task) => task.userId === this.userId())
  );
}
