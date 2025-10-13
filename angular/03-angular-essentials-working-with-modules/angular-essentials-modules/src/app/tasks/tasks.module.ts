import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tasks } from './tasks.component';
import { TaskModule } from './task/task.module';
import { NewTaskModule } from './new-task/new-task.module';

@NgModule({
  declarations: [Tasks],
  imports: [CommonModule, TaskModule, NewTaskModule],
  exports: [Tasks]
})
export class TasksModule {}


