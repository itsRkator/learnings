import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

function isPasswordMatching(controlName1: string, controlName2: string) {
  return (control: AbstractControl) => {
    const val1 = control.get(controlName1)?.value;
    const val2 = control.get(controlName2)?.value;

    return val1 === val2 ? null : { isEqual: false };
  };
}
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
    passwords: new FormGroup(
      {
        password: new FormControl<string>('', {
          validators: [Validators.required, Validators.minLength(6)],
        }),
        confirmPassword: new FormControl<string>('', {
          validators: [Validators.required, Validators.minLength(6)],
        }),
      },
      {
        validators: [isPasswordMatching('password', 'confirmPassword')],
      }
    ),
    name: new FormGroup({
      firstName: new FormControl<string>('', {
        validators: [Validators.required],
      }),
      lastName: new FormControl<string>('', {
        validators: [Validators.required],
      }),
    }),
    address: new FormGroup({
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
    }),
    role: new FormControl<'student' | 'teacher' | 'employee' | 'founder' | 'other'>('student', {
      validators: [Validators.required],
    }),
    source: new FormArray([new FormControl(false), new FormControl(false), new FormControl(false)]),
    agree: new FormControl<boolean>(false, {
      validators: [Validators.required],
    }),
  });

  onSubmit() {
    if (this.signUpForm.invalid) {
      console.log('Invalid Form', this.signUpForm.invalid);
      return;
    }

    console.log(this.signUpForm);
  }

  onReset() {
    console.log('Hello');
    this.signUpForm.reset();
  }
}
