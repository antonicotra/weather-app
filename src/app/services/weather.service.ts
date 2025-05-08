import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Coordinates, WeatherResponse } from '../models/weather';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly http: HttpClient = inject(HttpClient);
  coordinates: Coordinates | undefined;
  constructor() {}

  getWeather(city: string) {
    return this.http
      .get<any>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${environment.apiKey}`
      )
      .pipe(
        switchMap((response) => {
          this.coordinates = response.coord;
          return this.http.get<WeatherResponse>(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${this.coordinates?.lat}&lon=${this.coordinates?.lon}&appid=${environment.apiKey}`
          );
        })
      );
  }
}
