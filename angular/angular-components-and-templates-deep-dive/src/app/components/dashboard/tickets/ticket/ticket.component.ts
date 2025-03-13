import { Component, input, output, signal } from '@angular/core';
import { type Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  ticketData = input.required<Ticket>();
  detailsVisible = signal<boolean>(false);
  close = output();

  onToggleDetails() {
    this.detailsVisible.update((isVisible) => !isVisible);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
