import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { HeaderComponent } from '../header/header.component';
import { Movie } from '../models/movie.model';
import { MovieListService } from '../services/movie-list.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CardComponent, NgFor, HeaderComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  movies: Movie[] = [];
  myList: Movie[] = []; // qui dovrebbero finire i film che l'utente ha aggiunto ai preferiti.
  moviesServices = inject(MovieListService);

  ngOnInit(): void {
    this.search();
  }

  search() {
    // this.moviesServices.getMovies(this.searchQuery, 1).subscribe(
    //   (response) => {
    //     this.movies = response.results;
    //   },
    //   (error) => {
    //     console.error('Errore durante la ricerca:', error);
    //   }
    // );
  }

  addToMyList(movie: Movie) {
    this.moviesServices.addMovie(movie);
  }
}
