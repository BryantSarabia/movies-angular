import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { Movie } from '../models/movie.model';
import { MovieListService } from '../services/movie-list-api.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CardComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  movies: Movie[] = [];
  myList: Movie[] = []; // qui dovrebbero finire i film che l'utente ha aggiunto ai preferiti.
  moviesServices = inject(MovieListService);
  searchService = inject(SearchService);

  readonlyChannel$ = this.searchService.getReadonlyChannel();

  /**
   *  Quando arriva un nuovo dato, chiamiamo il nostro metodo search dandogli in pasto la search query
   */
  ngOnInit(): void {
    this.readonlyChannel$.subscribe((searchQuery) => {
      this.moviesServices.getMovies(searchQuery, 1).subscribe(
        (response) => {
          this.movies = response.results;
        },
        (error) => {
          console.error('Errore durante la ricerca:', error);
        }
      );
    });
    // this.readonlyChannel$.subscribe((searchQuery) => this.search(searchQuery));
    // this.readonlyChannel$.subscribe({
    //   next: (searchQuery) => {
    //     this.searchMovieOnChannelData(searchQuery);
    //   },
    //   error: (error) => {
    //     console.log(error)
    //   }
    // });
  }

  search(searchQuery: string) {
    this.moviesServices.getMovies(searchQuery, 1).subscribe(
      (response) => {
        this.movies = response.results;
      },
      (error) => {
        console.error('Errore durante la ricerca:', error);
      }
    );
  }

  addToMyList(movie: Movie) {
    this.moviesServices.addMovie(movie);
  }
}
