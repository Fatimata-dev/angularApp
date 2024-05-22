import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-racine',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './racine.component.html',
  styleUrl: './racine.component.css'
})
export class RacineComponent {
  races = ['Européen', 'Siamois', 'Persan', 'Bengal', 'Sphynx'];
  @Input() 
  selectedRace:string="";

}
