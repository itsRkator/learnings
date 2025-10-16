import { Component, Input } from '@angular/core';
import { type Ticket as TicketType } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css'
})
export class Ticket {
  @Input({required: true}) ticket!: TicketType;

}
