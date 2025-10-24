import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  signUpForm: FormGroup = new FormGroup({
    email: new FormControl<string>('', {
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl<string>('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
    confirmPassword: new FormControl<string>('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
    firstName: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    lastName: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    street: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    number: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    postalCode: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    city: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    role: new FormControl<'student' | 'teacher' | 'employee' | 'founder' | 'other'>('student', {
      validators: [Validators.required],
    }),
    agree: new FormControl<boolean>(false, {
      validators: [Validators.required],
    }),
  });

  onSubmit() {
    console.log(this.signUpForm);
  }

  onReset() {
    console.log('Hello');
    this.signUpForm.reset();
  }
}
