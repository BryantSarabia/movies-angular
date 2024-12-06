import { inject, Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface MoviesResponse {
  results: Movie[];
}

@Injectable({
  providedIn: 'root',
})
export class MovieListService {
  private http = inject(HttpClient);
  private url = "https://api.themoviedb.org/3/search/movie";
  private apiKey = "e99307154c6dfb0b4750f6603256716d";

  constructor() {
    // Caricare i film memorizzati nel localStorage all'avvio del servizio
    this.loadUserMovies();
  }

  getMovies(query: string, page: number): Observable<MoviesResponse> {
    const params = {
      api_key: this.apiKey,
      language: 'en-US',
      query, 
      page,
    };
    return this.http.get<MoviesResponse>(this.url, { params });
  }

  // Aggiungo al codice di ieri il codice per salvare il file nel localStorage
  addMovie(movie: Movie): void {
    const currentMovies = this.getUserMovies();
    if (!currentMovies.find(m => m.id === movie.id)) {
      currentMovies.push(movie);
      localStorage.setItem('userMovies', JSON.stringify(currentMovies));
    }
  }

  // Recuperare i film memorizzati nel localStorage
  getUserMovies(): Movie[] {
    const savedMovies = localStorage.getItem('userMovies');
    return savedMovies ? JSON.parse(savedMovies) : [];
  }

  // Carico i film all'avvio del servizio
  private loadUserMovies(): void {
    const savedMovies = localStorage.getItem('userMovies');
    if (savedMovies) {
      const parsedMovies: Movie[] = JSON.parse(savedMovies);
      if (Array.isArray(parsedMovies)) {
      }
    }
  }
}