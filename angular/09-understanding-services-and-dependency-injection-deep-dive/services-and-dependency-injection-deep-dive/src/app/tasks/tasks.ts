import { Component } from '@angular/core';
import { NewTask } from "./new-task/new-task";
import { TasksList } from "./tasks-list/tasks-list";

@Component({
  selector: 'app-tasks',
  imports: [NewTask, TasksList],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {}
