import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { InvestmentResultsComponent } from './components/investment-results/investment-results.component';
import { type InvestmentInput } from './invest-input.model';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private readonly investmentService: InvestmentService) {}

  onEnteringInputs(enteredInputs: InvestmentInput) {
    this.investmentService.calculateInvestmentResults(enteredInputs);
  }
}
