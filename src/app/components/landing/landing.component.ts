import { Component } from '@angular/core';
import { CityButtonComponent } from './city-button/city-button.component';
import { SearchbarComponent } from '../shared/searchbar/searchbar.component';

@Component({
  selector: 'app-landing',
  imports: [CityButtonComponent, SearchbarComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  citySelected: string = '';
  
  onCitySelected(city: string) {
    this.citySelected = city;
  }

}
