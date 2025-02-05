import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from './components/shared/shared.module';
import { TasksModule } from './components/tasks/tasks.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, HeaderComponent, UserComponent],
  imports: [
    BrowserModule,
    SharedModule,
    TasksModule,
    RouterModule.forRoot(routes),
  ],
  exports: [],
  providers: [],
})
export class AppModule {}
