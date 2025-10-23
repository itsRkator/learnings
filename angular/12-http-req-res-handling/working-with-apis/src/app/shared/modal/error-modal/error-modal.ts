import { Component, inject, input } from '@angular/core';
import { ErrorService } from '../../error.service';
import { Modal } from '../modal';

@Component({
  selector: 'app-error-modal',
  imports: [Modal],
  templateUrl: './error-modal.html',
  styleUrl: './error-modal.css',
})
export class ErrorModal {
  title = input<string>();
  message = input<string>();
  private errorService = inject(ErrorService);

  onClearError() {
    this.errorService.clearError();
  }
}
