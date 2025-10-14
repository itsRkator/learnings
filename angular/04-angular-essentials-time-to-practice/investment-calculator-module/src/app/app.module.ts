import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HeaderModule } from './header/header.module';
import { UserInputModule } from './user-input/user-input.module';
import { InvestmentResultsModule } from './investment-results/investment.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HeaderModule,
    UserInputModule,
    InvestmentResultsModule,
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
