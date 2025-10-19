import { Component, computed, Inject, inject, signal } from '@angular/core';
import { TaskItem } from './task-item/task-item';
import { TasksService } from '../tasks.service';
import { TASK_STATUS_OPTIONS, taskStatusOptionsProvider } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskItem],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
  providers: [taskStatusOptionsProvider],
})
export class TasksList {
  private readonly tasksService = inject(TasksService);

  public readonly taskStatusOptions = inject(TASK_STATUS_OPTIONS);

  private selectedFilter = signal<string>('all');

  // constructor(@Inject(TASK_STATUS_OPTIONS) taskStatusOptions: TASK_STATUS_OPTIONS){} // Alternative to non-service DI

  tasks = computed(() => {
    switch (this.selectedFilter()) {
      default:
        return this.tasksService.allTasks();
      case 'open':
        return this.tasksService.allTasks().filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return this.tasksService.allTasks().filter((task) => task.status === 'IN_PROGRESS');
      case 'done':
        return this.tasksService.allTasks().filter((task) => task.status === 'DONE');
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
