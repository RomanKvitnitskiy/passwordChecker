import { Component } from '@angular/core';

@Component({
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.css']
})
export class PasswordCheckerComponent {
  password: string;
  strength: string[];

  constructor() {
    this.password = '';
    this.strength = ['', '', ''];
  }

  checkPassword() {
    const letters = /[a-zA-Z]/.test(this.password);
    const digits = /\d/.test(this.password);
    const symbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    if (this.password.length === 0) {
      this.strength = ['', '', ''];
    } else if (this.password.length < 8) {
      this.strength = ['red', 'red', 'red'];
    } else {
      if (letters && digits && symbols) {
        this.strength = ['green', 'green', 'green'];
      } else if ((letters && symbols) || (letters && digits) || (digits && symbols)) {
        this.strength = ['yellow', 'yellow', 'grey'];
      } else {
        this.strength = ['red', 'grey', 'grey'];
      }
    }
  }
}
