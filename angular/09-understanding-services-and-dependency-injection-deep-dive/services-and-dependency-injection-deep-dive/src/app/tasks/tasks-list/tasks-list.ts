import { Component, computed, inject, signal } from '@angular/core';
import { TaskItem } from './task-item/task-item';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskItem],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TasksList {
  private readonly tasksService = inject(TasksService);

  private selectedFilter = signal<string>('all');

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
