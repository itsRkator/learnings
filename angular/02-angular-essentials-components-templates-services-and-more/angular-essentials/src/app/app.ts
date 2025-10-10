import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
}
