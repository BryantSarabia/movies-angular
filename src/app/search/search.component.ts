import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MovieListService } from '../services/movie-list.service';
import { query } from '@angular/animations';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CardComponent, NgFor, RouterLink],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  searchQuery: string = 'F';
  movies: Movie[] = [];
  myList: Movie[] = []; // qui dovrebbero finire i film che l'utente ha aggiunto ai preferiti.
  moviesServices = inject(MovieListService)

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.search()
  }

  search() {
    this.moviesServices.getMovies(this.searchQuery, 1).subscribe(
      (response) => {
        this.movies = response.results;
      },
      (error) => {
        console.error('Errore durante la ricerca:', error);
      }
    );

    this.searchQuery = '';
  }

  addToMyList(movie: Movie) {
    this.moviesServices.addMovie(movie)
  }
}