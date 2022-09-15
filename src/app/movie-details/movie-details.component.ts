import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  curr_id: number = -1;
  movie: Movie = {
    id: -1,
    name: '',
    desc: '',
    directors: [],
    rating: 0,
    top_cast: [],
    genre: [],
    year: 0,
    length: 0,
    transactType: 0,
    rentPrice: 0,
    buyPrice: 0,
    isAvailable: false,
    inCart: false,
  };

  constructor(private movieService: MovieService) {
    this.curr_id = this.movieService.curr_movie;
    this.movie = this.movieService
      .getMovies()
      .find((m) => m.id == this.curr_id)!;
  }

  ngOnInit(): void {}

  addToCart(movie: Movie, transType: number) {
    this.movieService.cartItem.push(movie);
    let index = this.movieService.movies.findIndex((m) => m.id == movie.id);
    this.movieService.movies[index].inCart = true;
    this.movieService.movies[index].transactType = transType;
    this.movie = this.movieService.movies[index];
  }
}
