import { Component } from '@angular/core';
import { SearchbarComponent } from "../shared/searchbar/searchbar.component";
import { CurrentWeatherComponent } from "./current-weather/current-weather.component";

@Component({
  selector: 'app-homepage',
  imports: [SearchbarComponent, CurrentWeatherComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
