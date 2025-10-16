import { Component } from '@angular/core';

import { NewTicket } from './new-ticket/new-ticket';
import { type Ticket as TicketType } from './ticket.model';
import { Ticket } from './ticket/ticket';

@Component({
  selector: 'app-tickets',
  imports: [NewTicket, Ticket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  tickets: TicketType[] = [];

  onAddTicket(ticketData: { title: string; text: string }) {
    const ticket: TicketType = {
      id: new Date().getTime().toString(),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open',
    };

    this.tickets.push(ticket);
  }
}
