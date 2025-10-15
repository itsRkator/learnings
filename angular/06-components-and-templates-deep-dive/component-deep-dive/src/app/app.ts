import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { ServerStatus } from './dashboard/server-status/server-status';
import { Traffic } from './dashboard/traffic/traffic';
import { Tickets } from './dashboard/tickets/tickets';
import { DashboardItem } from "./dashboard/dashboard-item/dashboard-item";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ServerStatus, Traffic, Tickets, DashboardItem],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
