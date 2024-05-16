import { Component, EventEmitter } from '@angular/core';
import { CreateOnomatopiaComponent } from '../create-onomatopia/create-onomatopia.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CreateOnomatopiaComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  onomatopoeiaList: string[] = ['Bang', 'Boom', 'Splash'];

  onReceiveNewOnomatopia(newOnomatopia: string):void {
    this.onomatopoeiaList.push(newOnomatopia) ;
  }
  // ngOnInit(){
  //   console.log(this.onomatopoeiaList);
  // }
}
