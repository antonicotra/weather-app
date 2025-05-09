import { CommonModule } from '@angular/common';
import { Component, effect, inject, input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { WeatherService } from '../../../services/weather.service';
import { WeatherResponse } from '../../../models/weather';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css',
})
export class SearchbarComponent {
  searchForm!: FormGroup;
  selectedCity = input<string>('');
  private readonly weatherService = inject(WeatherService);
  weatherData: WeatherResponse | undefined;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchQuery: ['', [Validators.required]],
    });
  }

  onSearch(): void {
    if (this.searchForm.valid) {
      this.weatherService
        .getWeather(this.searchForm.value.searchQuery)
        .subscribe((response) => {
          if (response) {
            this.weatherData = response;
            console.log('Weather data:', this.weatherData);
          }
        });
    }
    this.router.navigate(['/homepage'], { state: { data: this.weatherData } });
  }

  cityEffect = effect(() => {
    const cityValue = this.selectedCity();
    if (this.searchForm) {
      this.searchForm.patchValue({ searchQuery: cityValue });
      this.searchForm.get('searchQuery')?.updateValueAndValidity();
      console.log('City value updated:', cityValue);
    }
  });
}
