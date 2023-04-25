
import { Component, OnInit, TemplateRef } from '@angular/core';

import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  } 
  weather: any;
  notFound: any;
  constructor( private weatherService: WeatherService){}
   
  ngOnInit(): void {
    
  }

  getWeather(cityName: string){
    this.weatherService.getWeather(cityName)
    .subscribe({
      next : (res)=> {
        console.log(res);
        this.weather=res
        this.notFound="";
      },
      error : (err)=>{ 
        console.log(err);
        this.notFound=err;
        this.weather=''
      }
  }) 
  }

  submitLocation(cityName: HTMLInputElement){
    if(cityName.value){
      this.getWeather(cityName.value);
      cityName.value='';
    }  else {alert('Please enter a City name')}
      cityName.focus();
      return false;
  }
}

