import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

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

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', {
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

  onSubmit() {
    // Alternate
    // const enteredEmail = this.loginForm.controls['email'].value;
    // const enteredPassword = this.loginForm.controls['password'].value;

    const enteredEmail = this.loginForm.value.email;
    const enteredPassword = this.loginForm.value.password;

    console.log(enteredEmail, enteredPassword);
  }
}
