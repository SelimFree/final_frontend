import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// Material Styles
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})

export class RegisterModalComponent {

    constructor(
        public dialogRef: MatDialogRef<RegisterModalComponent>
    ) {}

    email = new FormControl('', [Validators.required, Validators.email]);
    hide1= true;
    hide2= true;

    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }

      return this.email.hasError('email') ? 'Not a valid email' : '';
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    register(): void {
        console.log("Registering...")
        this.dialogRef.close();
    }
}
