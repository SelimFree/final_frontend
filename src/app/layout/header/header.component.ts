import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(public dialog: MatDialog) {}

    openLoginDialog(): void {
        this.dialog.open(LoginModalComponent)
      };

    openRegisterDialog(): void {
      this.dialog.open(RegisterModalComponent)
    };
}
