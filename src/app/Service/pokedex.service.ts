import { Injectable } from '@angular/core';
import { POKEMONS } from '../../assets/pokemons-mock';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokemons = POKEMONS;

  constructor() { }
  getAllPokemons(){
    return this.pokemons;
  }

  // getPokemonById(id: number) {
  //   return this.pokemons.find(pokemon => pokemon.id === id);
  // }
  createPokemon(pokemon: any){
    this.pokemons.push(pokemon);
  }
}
