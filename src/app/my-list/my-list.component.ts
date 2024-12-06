import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Movie } from '../models/movie.model';
import { MovieListService } from '../services/movie-list-api.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css'],
})
export class MyListComponent {
  myMovies: Movie[] = [];
  movieListService = inject(MovieListService);
  searchService = inject(SearchService);

  readonlyChannel$ = this.searchService.getReadonlyChannel();

  ngOnInit() {
    this.myMovies = this.movieListService.getUserMovies();

    this.readonlyChannel$.subscribe((title) => {
      this.myMovies = this.movieListService.filterUserMovies(title);
    });
  }
}
