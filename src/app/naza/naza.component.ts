import { Component, inject } from '@angular/core';
import { NazaService } from '../Service/naza.service';

@Component({
  selector: 'app-naza',
  standalone: true,
  imports: [],
  templateUrl: './naza.component.html',
  styleUrl: './naza.component.css'
})
export class NazaComponent {

  apodData: any; 
  nazaService: NazaService = inject(NazaService);
  
  ngOnInit(){

    this.nazaService.getImageOfTheDay().subscribe((data) => {
    this.apodData = data;
  });
}

}
