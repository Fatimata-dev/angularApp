import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.css'
})
export class CalculatriceComponent {
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

  Calculate(operator : string) :void{
  
    switch(operator){
      case '+':
        this.operation = '+';
        this.resultat = this.random1 + this.random2;
        break;
      case '-':
        this.operation = '-';
        this.resultat = this.random1 - this.random2;
        break;
      case '*':
        this.operation = '*';
        this.resultat = this.random1 * this.random2;
        break;
      case '/':
        this.operation = '/';
        this.resultat = this.random1 / this.random2;
        break;
    }
}
}
