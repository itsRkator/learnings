import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { InvestmentResults } from './investment-results/investment-results';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, UserInput, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
