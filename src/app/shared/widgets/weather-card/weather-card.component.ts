import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-widget-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  lat: number;
  lon: number;
  weather: any;
  forecast: any;
  weatherWind;
  listForecast: [] = [];
  hourlyForecast = [];
  moment: any = moment;
  highTemperature;
  lowTemperature;
  constructor(
    private weatherService: WeatherService,
    private spinners: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(position => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        this.getWeather();
        this.getForecast();
      });
    } else {
      this.lat = 43.5283;
      this.lon = 5.4497;
      this.getWeather();
      this.getForecast();
    }
  }

  getWeather() {
    this.spinners.show();
    this.weatherService
      .getWeatherDatabyCoords(this.lat, this.lon)
      .subscribe(data => {
        this.weather = data;
        this.weatherWind = this.weather.wind.speed * 3.6;
        this.spinners.hide();
      });
  }

  getForecast() {
    this.spinners.show();
    this.weatherService.getFiveDaysForecastDatabyCoords().subscribe(data => {
      this.forecast = [data];
      this.forecast.forEach(element => {
        [element.daily].forEach(elements => {
          this.highTemperature = elements.data[0].temperatureHigh;
          this.lowTemperature = elements.data[0].temperatureLow;
          this.hourlyForecast = elements.data.slice(1, 5);
          this.spinners.hide();
        });
      });
    });
  }
}
