import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { type Ticket } from './ticket.model';

@Component({
  selector: 'app-tickets',
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; text: string }): void {
    this.tickets.push({
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open',
    });
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}
