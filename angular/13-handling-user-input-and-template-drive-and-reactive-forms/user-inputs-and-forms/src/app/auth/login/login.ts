import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  onSubmit(formData: NgForm) {
    const { email: enteredEmail, password: enteredPassword } = formData.form.value;
    console.log(enteredEmail, enteredPassword);
  }
}
