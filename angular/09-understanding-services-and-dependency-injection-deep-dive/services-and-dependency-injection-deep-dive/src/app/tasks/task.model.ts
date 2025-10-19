import { InjectionToken, Provider } from '@angular/core';

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export type TaskStatusOption = {
  value: 'open' | 'in-progress' | 'done';
  text: string;
  taskStatus: TaskStatus;
};

export const TASK_STATUS_OPTIONS = new InjectionToken<TaskStatusOption[]>('task-status-options');

export const TaskStatusOptions: TaskStatusOption[] = [
  { value: 'open', taskStatus: 'OPEN', text: 'Open' },
  { value: 'in-progress', taskStatus: 'IN_PROGRESS', text: 'In-Progress' },
  { value: 'done', taskStatus: 'DONE', text: 'Completed' },
];

export const taskStatusOptionsProvider: Provider = {
  provide: TASK_STATUS_OPTIONS,
  useValue: TaskStatusOptions,
};

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
