import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NazaService {

  private http = inject(HttpClient);
  url = "https://api.nasa.gov/planetary/apod";
  constructor() { }

  API_KEY = "FPiNecHThCAKALsDScu9vM59RNbG2ENSf1E4EFGN"; 
  APOD_URL = "https://api.nasa.gov/planetary/apod?api_key=" +this.API_KEY;

  getImageOfTheDay():Observable<any>{
    return this.http.get<any>(this.APOD_URL);
  }
}
