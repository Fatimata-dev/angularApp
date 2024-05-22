import { Component, inject } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { CreateKittenComponent } from '../create-kitten/create-kitten.component';
import { KittenService } from '../../kitten.service';
import { UserKittenComponent } from '../user-kitten/user-kitten.component';

@Component({
  selector: 'app-list-kitten',
  standalone: true,
  imports: [ RouterOutlet,RouterLink ,CreateKittenComponent,UserKittenComponent],
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.css'
})
export class ListKittenComponent {
  kittenService: KittenService = inject(KittenService);
  kittens: any[] = [];
  adoptedKitten: any[] = []; 
  ngOnInit(){
     this.kittenService.getKitens();
      this.kittens = this.kittenService.kittens;
  }

  adoptKitten(adoptedKitten: any){
    this.kittenService.adoptKitten(adoptedKitten);
  }
}
