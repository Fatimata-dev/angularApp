import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KittenService {

  constructor() { }
  kittens: any[] = [];
  adoptedkittens: any[] = [];

  createKitten(kitten: any){
    localStorage.setItem('Kittens', JSON.stringify([...this.kittens, kitten]))
    this.kittens.push(kitten);
  
  }
  getKitens(){
    let storedKittens = localStorage.getItem('Kittens');
    this.kittens = storedKittens ? JSON.parse(storedKittens) : []; 
  }

  adoptKitten( adoptedKitten:any) {
   adoptedKitten= this.kittens.pop();
    localStorage.setItem('Kittens', JSON.stringify(this.kittens));
    localStorage.setItem('AdoptedKitten', JSON.stringify([...this.adoptedkittens,adoptedKitten]));
    this.adoptedkittens.push(adoptedKitten);
  }

  getAdoptedKitten(){
    let storedKittens = localStorage.getItem('AdoptedKitten');
    this.adoptedkittens=  storedKittens ? JSON.parse(storedKittens) : [];
  }

}
