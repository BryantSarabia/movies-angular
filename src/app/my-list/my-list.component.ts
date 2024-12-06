import { Component } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieListService } from '../services/movie-list.service';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';


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
    this.myMovies = this.movieListService.getUserMovies()
  }
}
