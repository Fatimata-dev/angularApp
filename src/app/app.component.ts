import { Component, inject } from '@angular/core';
import { RouterOutlet,RouterLink, ActivatedRoute, ParamMap, Router, UrlSegment } from '@angular/router';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,RouterLink]
})
export class AppComponent {
  title = 'Quetes en Angular';


  constructor() {}

}
