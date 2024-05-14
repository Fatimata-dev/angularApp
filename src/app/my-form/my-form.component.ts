import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Order } from '../../interface/order';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent {
  newOrder: Order = {
    title: "",
    quantity: 0,
    date: new Date(),
    contact: ""
  };
  submitted = false;
  onSubmit():void{
    console.log(this.newOrder);
    this.submitted = true;
  }

}
