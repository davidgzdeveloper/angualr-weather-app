import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '56b7856f30b1740e0da5ed87e81a7f70'
  URI: string = "";
  constructor(private httpClient: HttpClient) {
     this.URI = `https://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&units=metric&q=`  
  }

  getWeather(cityName: string){
     return this.httpClient.get(`${this.URI}${cityName}`)
  }
}
