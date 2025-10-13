import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Task } from './task.component';
import { CardModule } from '../../shared/card/card.module';

@NgModule({
  declarations: [Task],
  imports: [CommonModule, CardModule],
  exports: [Task],
  providers: [DatePipe]
})
export class TaskModule {}
