import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatriceComponent } from "./calculatrice/calculatrice.component";
import { BlockComponent } from "./block/block.component";
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CalculatriceComponent, BlockComponent, UserProfileComponent]
})
export class AppComponent {
  title = 'Quetes en Angular';
}
