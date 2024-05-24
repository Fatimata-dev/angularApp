import { Component, inject, Input } from '@angular/core';
import { Pokemons } from '../../../models/pokemons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex-page',
  standalone: true,
  imports: [],
  templateUrl: './pokedex-page.component.html',
  styleUrl: './pokedex-page.component.css'
})
export class PokedexPageComponent {
  router : Router = inject(Router);
  @Input()
  pokemons: Pokemons[] = [];

  details(id:number) {
    this.router.navigate([`/pokemon/${id}`]);
  }

}
