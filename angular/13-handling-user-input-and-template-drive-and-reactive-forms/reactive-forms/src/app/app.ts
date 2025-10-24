import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./auth/login/login";
import { Signup } from "./auth/signup/signup";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Signup],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
