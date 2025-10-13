import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { UserModule } from './user/user.module';
import { CardModule } from './shared/card/card.module';
import { TasksModule } from './tasks/tasks.module';


@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot([]), HeaderModule, UserModule, CardModule, TasksModule],
})
export class AppModule {}
