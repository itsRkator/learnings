import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './users/users';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Users, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
