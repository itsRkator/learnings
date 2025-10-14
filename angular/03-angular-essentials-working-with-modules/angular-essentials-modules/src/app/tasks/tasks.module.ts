import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TaskModule } from './task/task.module';
import { NewTaskModule } from './new-task/new-task.module';

@NgModule({
  declarations: [TasksComponent],
  imports: [CommonModule, TaskModule, NewTaskModule],
  exports: [TasksComponent],
})
export class TasksModule {}
