import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Movie[] = [];

  constructor(@Inject (MovieService) private movieService: MovieService, private router:Router) { 
    this.movies = this.movieService.movies;
  }

  ngOnInit(): void {
    
  }

  addToCart(movie: Movie){
    this.movieService.cartItem.push(movie);
    let index = this.movies.findIndex((m) => m.id == movie.id);
    
    this.movieService.movies[index].inCart = true;
    this.movieService.movies[index].transactType = 1;
    this.movies = this.movieService.movies;
  }
  
  viewDetails(id:number){
    this.movieService.curr_movie = id;
    this.router.navigateByUrl("/details");

  }

}
