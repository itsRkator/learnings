import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Button } from '../../../shared/button/button';
import { Control } from '../../../shared/control/control';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket implements OnInit, AfterViewInit {
  @ViewChild('form') formElement?: ElementRef<HTMLFormElement>;

  // @Output() add = new EventEmitter<{ title: string; text: string }>();

  // TODO: How to use ViewChildren/ContentChildren directives and viewChildren/contentChildren signals
  // @ViewChildren("") buttonChildren?: ElementRef;

  // Using signals
  // formElement = viewChild<ElementRef<HTMLFormElement>>('form');
  titleElement = viewChild<ElementRef<HTMLInputElement>>('titleInput');
  textElement = viewChild<ElementRef<HTMLTextAreaElement>>('textInput');

  add = output<{ title: string; text: string }>();

  ngOnInit(): void {
    console.log('On Init in NewTicket Component');
    console.log(this.formElement?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('After View Init');
    console.log(this.formElement?.nativeElement);
  }

  onSubmit(title: string, text: string): void {
    this.add.emit({ title, text });
    this.formElement?.nativeElement.reset();
  }
}
