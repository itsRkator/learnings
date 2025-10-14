import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewTaskComponent } from './new-task.component';

@NgModule({
  declarations: [NewTaskComponent],
  imports: [CommonModule, FormsModule],
  exports: [NewTaskComponent],
})
export class NewTaskModule {}
