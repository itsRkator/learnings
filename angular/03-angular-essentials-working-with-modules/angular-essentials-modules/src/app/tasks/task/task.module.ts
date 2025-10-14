import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TaskComponent } from './task.component';
import { CardModule } from '../../shared/card/card.module';

@NgModule({
  declarations: [TaskComponent],
  imports: [CommonModule, CardModule],
  exports: [TaskComponent],
  providers: [],
})
export class TaskModule {}
