import { inject, Injectable, signal } from '@angular/core';
import { TaskStatus, type Task as TaskType } from './task.model';
import { Logging } from '../logging';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<TaskType[]>([]);
  private readonly loggingService = inject(Logging);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: TaskType = {
      ...taskData,
      id: new Date().getTime().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    this.loggingService.log('Added task with title ' + taskData.title);
  }

  updateTaskStatus(id: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) => {
      return oldTasks.map((task) => (task.id === id ? { ...task, status: newStatus } : task));
    });
    this.loggingService.log('Changed task status with  ' + newStatus);
  }
}
