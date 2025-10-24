import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, Observable, of } from 'rxjs';

function mustContainDollarSymbol(control: AbstractControl) {
  if (control.value.includes('$')) {
    return null;
  }
  return { containsDollarSymbol: false };
}

function isEmailUnique(control: AbstractControl) {
  if (control.value !== 'rohitashkmwt@gmail.com') {
    return of(null);
  }

  return of({ isUnique: false });
}

let initialEmail = '';
const savedForm = window.localStorage.getItem('saved-login-form');
if (savedForm) {
  const loadedForm: { email: string } = JSON.parse(savedForm);
  initialEmail = loadedForm.email;
}
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(initialEmail, {
      validators: [Validators.email, Validators.required],
      asyncValidators: [isEmailUnique],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), mustContainDollarSymbol],
    }),
  });

  get isInvalidEmail() {
    return (
      this.loginForm.controls['email'].touched &&
      this.loginForm.controls['email'].dirty &&
      this.loginForm.controls['email'].invalid
    );
  }

  get isInvalidPassword() {
    return (
      this.loginForm.controls['password'].touched &&
      this.loginForm.controls['password'].dirty &&
      this.loginForm.controls['password'].invalid
    );
  }

  ngOnInit(): void {
    // const savedForm = window.localStorage.getItem('saved-login-form');
    // if (savedForm) {
    //   const loadedForm: { email: string } = JSON.parse(savedForm);
    //   this.loginForm.patchValue({ email: loadedForm.email });
    // }

    const subscription = this.loginForm.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (value: { email: string | null; password: string | null }) => {
        console.log(value);
        window.localStorage.setItem('saved-login-form', JSON.stringify({ email: value.email }));
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onSubmit() {
    // Alternate
    // const enteredEmail = this.loginForm.controls['email'].value;
    // const enteredPassword = this.loginForm.controls['password'].value;

    const enteredEmail = this.loginForm.value.email;
    const enteredPassword = this.loginForm.value.password;

    console.log(enteredEmail, enteredPassword);
  }
}
