import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
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
  @ViewChild('form') formElement?: ElementRef<HTMLFormElement>;

  titleElement = viewChild<ElementRef<HTMLInputElement>>('titleInput');
  textElement = viewChild<ElementRef<HTMLTextAreaElement>>('textInput');

  onSubmit(title: string, text: string): void {
    const enteredTitle = title;
    const enteredRequest = text;

    console.log(this.titleElement()?.nativeElement.value);
    console.log(this.textElement()?.nativeElement.value);

    this.formElement?.nativeElement.reset();
  }
}
