import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  // Native approach
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  // Using Signals (Modern approach)
  // userId = input.required<string>()
  // cancel = output<void>();
  // enteredTitle = signal<string>('');
  // enteredSummary = signal<string>('');
  // enteredDate = signal<string>('');

  private readonly tasksService = inject(TasksService); // Alternative dependency injection to constructor based approach
  // constructor(private readonly tasksService: TasksService){}

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
