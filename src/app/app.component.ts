import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatriceComponent } from "./calculatrice/calculatrice.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CalculatriceComponent]
})
export class AppComponent {
  title = 'Caluculatrice en Angular';
}
