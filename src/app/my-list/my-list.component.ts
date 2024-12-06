import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Movie } from '../models/movie.model';
import { MovieListService } from '../services/movie-list-api.service';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css'],
})
export class MyListComponent {
  myMovies: Movie[] = [];

  constructor(private movieListService: MovieListService) {}

  ngOnInit() {
    this.myMovies = this.movieListService.getUserMovies();
  }
}
