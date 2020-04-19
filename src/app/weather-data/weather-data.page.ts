import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.page.html',
  styleUrls: ['./weather-data.page.scss'],
})
export class WeatherDataPage implements OnInit {
  weatherData: any = [];
  iconCode:any = this.weatherData[0]
  icon:any = "http://openweathermap.org/img/wn/" +this.iconCode+".png";


  constructor(private weatherdataservice: WeatherDataService){}

  ngOnInit(){
    this.weatherdataservice.getWeather().subscribe(
      (data)=>{
      this.weatherData = data.weather;
      console.log(data);
    })

    

    }
    
  }




