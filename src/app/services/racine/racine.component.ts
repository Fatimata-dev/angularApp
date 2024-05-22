import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink ,RouterOutlet} from '@angular/router';
import { UserKittenComponent } from '../user-kitten/user-kitten.component';
import { ListKittenComponent } from '../list-kitten/list-kitten.component';
@Component({
  selector: 'app-racine',
  standalone: true,
  imports: [FormsModule,RouterLink, RouterOutlet,UserKittenComponent,ListKittenComponent],
  templateUrl: './racine.component.html',
  styleUrl: './racine.component.css'
})
export class RacineComponent {
  // @Input() 
  // selectedRace:string="Siamois";

}
