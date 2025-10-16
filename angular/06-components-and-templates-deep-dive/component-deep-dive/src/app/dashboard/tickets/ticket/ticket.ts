import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
  signal,
} from '@angular/core';
import { type Ticket as TicketType } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css',
})
export class Ticket {
  // @Input({required: true}) ticket!: TicketType;
  // @Output() complete = new EventEmitter<void>();

  ticket = input.required<TicketType>();
  detailsVisible = signal<boolean>(false);
  close = output<string>();

  onToggleDetails() {
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted() {
    this.close.emit(this.ticket().id);
  }
}
