import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherDatabyCoords(lat, lon) {
    const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'metric')
      .set('lang', 'fr')
      .set('appid', `${environment.apiKeyOpenWeatherMap}`);

    return this.http.get(`${environment.apiOpenWeatherMap}/weather`, {
      params
    });
  }

  getForecastDatabyCoords(lat, lon) {
    const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'metric')
      .set('lang', 'fr')
      .set('appid', `${environment.apiKeyOpenWeatherMap}`);

    return this.http.get(`${environment.apiOpenWeatherMap}/forecast`, {
      params
    });
  }

  getFiveDaysForecastDatabyCoords() {
    const params = new HttpParams()
      .set('exclude', 'flags,alerts,hourly, currently')
      .set('units', 'auto')
      .set('lang', 'fr');
    return this.http.get(`${environment.apiDarkSkyWeather}`, { params });
  }
}
