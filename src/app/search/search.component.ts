import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  constructor(private router:Router){
    
  }
  submitted = false;
  userName: string = '';
  OnSubmit(){
    this.submitted = true;
    this.router.navigate(['wcs/'+this.userName]);
    

  }

}
