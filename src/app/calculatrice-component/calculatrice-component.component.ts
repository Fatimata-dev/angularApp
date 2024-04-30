import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice-component',
  standalone: true,
  imports: [],
  templateUrl: './calculatrice-component.component.html',
  styleUrl: './calculatrice-component.component.css'
})
export class CalculatriceComponentComponent {
   random1: number = 0;
   random2: number = 0;
   resultat:  number = 0;
   operation: any;
  onButton1Click() {
    //console.log('Le bouton 1 a été cliqué ');
   this.random1 = Math.ceil(Math.random() * 20);
   console.log(this.random1)
  }

  onButton2Click() {
    //console.log('Le bouton 2 a été cliqué ');
    this.random2 = Math.ceil(Math.random() * 20);
    console.log(this.random2);
  }

  addition() {
    this.operation = "+";
    this.resultat = this.random1 + this.random2;
    
   // console.log(this.resultat);
  }
  multiplication() {
    this.operation = "*";
    this.resultat = this.random1 * this.random2;
    
    //console.log(this.resultat);
  }
  soustraction() {
    
    this.operation = "-";
    this.resultat = this.random1 - this.random2;
    //console.log(this.resultat);
  }
  division() {
    
    this.operation = "/";
    this.resultat = this.random1 / this.random2;
    //console.log(this.resultat);
  }

}
