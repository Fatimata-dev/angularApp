import { Component, inject } from '@angular/core';
import { KittenService } from '../../kitten.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-user-kitten',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.css'
})
export class UserKittenComponent {
  kittenService: KittenService = inject(KittenService);
  adoptedKitten: any[] = []; 
  ngOnInit(){
    this.kittenService.getAdoptedKitten();
    this.adoptedKitten = this.kittenService.adoptedkittens;
    console.log(this.adoptedKitten);
   
  }
}
