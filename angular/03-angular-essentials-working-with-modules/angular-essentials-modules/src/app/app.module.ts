import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { UserModule } from './user/user.module';
import { CardModule } from './shared/card/card.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HeaderModule,
    UserModule,
    CardModule,
    TasksModule,
  ],
})
export class AppModule {}
