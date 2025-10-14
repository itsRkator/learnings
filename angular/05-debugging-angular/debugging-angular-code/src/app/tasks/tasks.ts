import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';
import { NewTask } from './new-task/new-task';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [NewTask, Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
