import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-city-button',
  imports: [],
  templateUrl: './city-button.component.html',
  styleUrl: './city-button.component.css'
})
export class CityButtonComponent {

  @Input() nameCity!: string;
  @Output() selectedCity = new EventEmitter<string>();

  onClick() {
    this.selectedCity.emit(this.nameCity);
}

}
