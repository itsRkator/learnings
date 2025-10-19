import { Component, ElementRef, viewChild } from '@angular/core';

import { TasksService } from '../tasks.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  constructor(private readonly tasksService: TasksService) {}

  onAddTask(title: string, description: string) {
    this.tasksService.addTask({ title, description });

    this.formEl()?.nativeElement.reset();
  }
}
