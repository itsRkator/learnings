import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.component';

@NgModule({
  declarations: [NewTask],
  imports: [CommonModule, FormsModule],
  exports: [NewTask]
})
export class NewTaskModule {}
