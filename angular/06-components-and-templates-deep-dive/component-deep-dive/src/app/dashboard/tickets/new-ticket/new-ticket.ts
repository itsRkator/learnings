import { Component, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Button } from '../../../shared/button/button';
import { Control } from '../../../shared/control/control';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket {
  onSubmit(title: HTMLInputElement, request: HTMLTextAreaElement): void {
    console.dir(title.value);
    console.dir(request.value);
  }
}
