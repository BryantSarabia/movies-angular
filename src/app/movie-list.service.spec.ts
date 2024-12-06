import { TestBed } from '@angular/core/testing';

import { MovieListService } from './services/movie-list-api.service';

describe('MovieListService', () => {
  let service: MovieListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
