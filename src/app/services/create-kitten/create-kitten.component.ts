import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RacineComponent } from '../racine/racine.component';
import { KittenService } from '../../kitten.service';

@Component({
  selector: 'app-create-kitten',
  standalone: true,
  imports: [FormsModule,RacineComponent],
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.css'
})
export class CreateKittenComponent {
  kittenService: KittenService = inject(KittenService);
  kitten = {
    name: '',
    age : 0,
    race: ''

  }

  createKitten(){
    this.kittenService.createKitten(this.kitten);
  }

}
