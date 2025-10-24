import {
  afterEveryRender,
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private form = viewChild.required<NgForm>('form');
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    const savedForm = window.localStorage.getItem('saved-login-form');
    if (savedForm) {
      const loadedFormData = JSON.parse(savedForm);
      const savedEmail = loadedFormData.email;

      setTimeout(() => {
        // this.form().setValue({email: savedEmail, password: ''}) // If the entire form object needs to be updated
        this.form().controls['email'].setValue(savedEmail);
      }, 1);
    }

    afterNextRender(() => {
      const subscription = this.form()
        .valueChanges?.pipe(debounceTime(500))
        .subscribe({
          next: (value) => {
            window.localStorage.setItem('saved-login-form', JSON.stringify({ email: value.email }));
          },
        });

      this.destroyRef.onDestroy(() => {
        subscription?.unsubscribe();
      });
    });
  }

  onSubmit(formData: NgForm) {
    if (formData.form.invalid) {
      return;
    }

    const { email: enteredEmail, password: enteredPassword } = formData.form.value;

    console.log(enteredEmail, enteredPassword);
    formData.form.reset();
  }
}
