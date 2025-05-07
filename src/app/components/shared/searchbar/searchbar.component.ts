import { CommonModule } from '@angular/common';
import { Component, effect, input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css',
})
export class SearchbarComponent {
  searchForm!: FormGroup;
  selectedCity = input<string>('');

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchQuery: ['', [Validators.required]],
    });
  }

  onSearch(): void {
    if(this.searchForm.valid) {
    console.log('Search query:', this.searchForm.value.searchQuery);
    }
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