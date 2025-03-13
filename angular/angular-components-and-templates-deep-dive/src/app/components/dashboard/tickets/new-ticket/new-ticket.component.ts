import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  imports: [FormsModule, ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private readonly form?: ElementRef<HTMLFormElement>; // Native approach: Using Decorators (Zone.js)
  // private readonly form = viewChild.required<ElementRef<HTMLFormElement>>('form'); // Modern Approach: Using Signals (Subscriptions)
  // @Output() add = new EventEmitter<{ title: string; text: string }>();

  enteredTitle = '';
  enteredText = '';

  add = output<{ title: string; text: string }>();

  ngOnInit(): void {
    console.log('On Init');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('After View init');
    console.log(this.form?.nativeElement);
  }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    // this.form?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
