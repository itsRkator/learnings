import { Injectable, signal } from '@angular/core';
import { TaskStatus, type Task as TaskType } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<TaskType[]>([]);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: TaskType = {
      ...taskData,
      id: new Date().getTime().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }

  updateTaskStatus(id: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) => {
      return oldTasks.map((task) => (task.id === id ? { ...task, status: newStatus } : task));
    });
  }
}
