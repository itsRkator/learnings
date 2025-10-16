import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
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

  // TODO: How to use ViewChildren/ContentChildren directives and viewChildren/contentChildren signals
  // @ViewChildren("") buttonChildren?: ElementRef;

  // Using signals
  // formElement = viewChild<ElementRef<HTMLFormElement>>('form');
  titleElement = viewChild<ElementRef<HTMLInputElement>>('titleInput');
  textElement = viewChild<ElementRef<HTMLTextAreaElement>>('textInput');

  ngOnInit(): void {
    console.log('On Init in NewTicket Component');
    console.log(this.formElement?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('After View Init');
    console.log(this.formElement?.nativeElement);
  }

  onSubmit(title: string, text: string): void {
    const enteredTitle = title;
    const enteredRequest = text;

    console.log(this.titleElement()?.nativeElement.value);
    console.log(this.textElement()?.nativeElement.value);

    this.formElement?.nativeElement.reset();
  }
}
