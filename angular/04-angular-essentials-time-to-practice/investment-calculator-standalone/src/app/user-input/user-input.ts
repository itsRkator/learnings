import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  enteredInitialInvestment = signal<string>('0');
  enteredAnnualInvestment = signal<string>('0');
  enteredExpectedReturn = signal<string>('5');
  enteredDuration = signal<string>('10');

  constructor(private readonly investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: parseFloat(this.enteredInitialInvestment()),
      annualInvestment: parseFloat(this.enteredAnnualInvestment()),
      expectedReturn: parseFloat(this.enteredExpectedReturn()),
      duration: parseFloat(this.enteredDuration()),
    });

    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
