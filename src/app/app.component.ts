import { Component, inject } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { NazaService } from './Service/naza.service';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,RouterLink]
})
export class AppComponent {
  nazaService: NazaService = inject(NazaService);
  title = 'Quetes en Angular';
  apodData: any; 

  ngOnInit(){

    this.nazaService.getImageOfTheDay().subscribe((data) => {
      this.apodData = data;
    });
  }
}
