import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Users } from './users/users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Users],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
