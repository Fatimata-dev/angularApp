import { Component } from '@angular/core';
import { User } from '../../../interface/User';
import {FormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
submitted = false;
 newUser:  User={
    email: "",
    lastName: "",
    firstName: "",
    password: ""
 };
  OnSubmit(){
    this.submitted = true;
    console.log(this.newUser);

  }

}
