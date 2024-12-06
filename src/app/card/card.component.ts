import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() movie!: Movie;
  @Output() addMovie = new EventEmitter<Movie>(); 

  addToList() {
    this.addMovie.emit(this.movie); 
  }
}
