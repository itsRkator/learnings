import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<{
    title: string;
    summary: string;
    dueDate: string;
  }>();

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    });
  }
}
