import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from '../models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }
  
  private http = inject(HttpClient);
  
  url = '../../assets/cocktails.json'
  getCocktails(): Observable<Cocktail[]>{

    return this.http.get<Cocktail[]>(this.url);
  }
}
