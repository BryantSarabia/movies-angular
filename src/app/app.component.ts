import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from "./search/search.component";
import { CardComponent } from "./card/card.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Netflix';
}