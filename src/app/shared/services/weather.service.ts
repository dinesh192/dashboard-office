import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  readonly rootUrl = 'http://api.openweathermap.org/data/2.5/';
  apiKey = '8d516015a3b94526a34642759a19d41b';

  constructor(private http: HttpClient) {}

  getWeatherDatabyCoords(lat, lon) {
    const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'metric')
      .set('lang', 'fr')
      .set('appid', this.apiKey);

    return this.http.get(this.rootUrl + 'weather', { params });
  }

  getForecastDatabyCoords(lat, lon) {
    const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'metric')
      .set('lang', 'fr')
      .set('appid', this.apiKey);

    return this.http.get(this.rootUrl + 'forecast', { params });
  }
}
