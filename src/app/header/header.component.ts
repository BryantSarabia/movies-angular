import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-header',
  imports: [FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  searchService = inject(SearchService);
  searchQuery = '';

  search() {
    this.searchService.publishToChannel(this.searchQuery);
  }
}
