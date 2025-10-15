import { Component } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { Control } from "../../../shared/control/control";

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket {}
