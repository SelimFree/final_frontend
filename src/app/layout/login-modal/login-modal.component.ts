import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// Material Styles
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
    constructor(
        public dialogRef: MatDialogRef<LoginModalComponent>
    ) {}

    email = new FormControl('', [Validators.required, Validators.email]);
    hide1= true;

    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }

      return this.email.hasError('email') ? 'Not a valid email' : '';
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    login(): void {
        console.log("Logging in...")
        this.dialogRef.close();
    }
}
