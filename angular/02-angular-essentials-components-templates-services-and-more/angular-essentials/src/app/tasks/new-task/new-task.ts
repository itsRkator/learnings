import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasksService';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  // Dependency injection using the inject method
  private readonly tasksService = inject(TasksService);

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(this.userId, {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate,
    });
    this.close.emit();
  }
}
