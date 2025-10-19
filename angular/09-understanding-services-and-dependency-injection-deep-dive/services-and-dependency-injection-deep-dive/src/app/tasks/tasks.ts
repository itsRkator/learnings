import { Component } from '@angular/core';
import { NewTask } from './new-task/new-task';
import { TasksList } from './tasks-list/tasks-list';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [NewTask, TasksList],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  // providers: [TasksService], // Element Injector: A separate instance for each instance of this component
})
export class Tasks {}
