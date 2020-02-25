import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../../services/weather.service";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-widget-weather-card",
  templateUrl: "./weather-card.component.html",
  styleUrls: ["./weather-card.component.scss"]
})
export class WeatherCardComponent implements OnInit {
  lat: number;
  lon: number;
  weather: any;
  forecast: any;
  weatherWind;
  listForecast: [] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    // if (navigator.geolocation) {
    //   navigator.geolocation.watchPosition(position => {
    //     this.lat = position.coords.latitude;
    //     this.lon = position.coords.longitude;
    //     this.getWeather();
    //     this.getForecast();
    //   });
    // } else {
    this.lat = 43.5297;
    this.lon = 5.4474;
    this.getWeather();
    this.getForecast();
    // }
  }

  getWeather() {
    this.weatherService
      .getWeatherDatabyCoords(this.lat, this.lon)
      .subscribe(data => {
        this.weather = data;
        this.weatherWind = this.weather.wind.speed * 3.6;
      });
  }

  getForecast() {
    this.weatherService
      .getForecastDatabyCoords(this.lat, this.lon)
      .subscribe(data => {
        this.forecast = data;
        this.listForecast.push();
        console.log(data);
      });
  }
}
