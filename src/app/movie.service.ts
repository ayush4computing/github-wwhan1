import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  curr_movie: number = -1;
  public movies: Movie[] = [
    {
      id: 0,
      name: "Harry Potter",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies tellus congue, volutpat arcu a, mattis metus.Nulla fringilla mollis magna, at varius lorem aliquam tristique. Aliquam tortor eros, volutpat sed congue id, consectetur eu turpis. Ut tristique sed leo et volutpat. Proin vel urna ac sapien euismod luctus et sit amet ex.",
      directors: ["John", "Peter"],
      rating: 9.2,
      top_cast: ["Daniel Radcliff", "Emma Watson", "Rupert Grint"],
      genre: ["Adventure", "Action", "Family"],
      year: 2005,
      length: 177,
      transactType: 1,
      rentPrice: 49,
      buyPrice: 99,
      isAvailable: true,
    },

    {
      id: 1,
      name: "John Wick",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies tellus congue, volutpat arcu a, mattis metus.Nulla fringilla mollis magna, at varius lorem aliquam tristique. Aliquam tortor eros, volutpat sed congue id, consectetur eu turpis. Ut tristique sed leo et volutpat. Proin vel urna ac sapien euismod luctus et sit amet ex.",
      directors: ["Chad", "David"],
      rating: 7.4,
      top_cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"],
      genre: ["Crime", "Action", "Thriller"],
      year: 2014,
      length: 177,
      transactType: 2,
      rentPrice: 39,
      buyPrice: 69,
      isAvailable: true,
    },

    {
      id: 2,
      name: "The Shawshank Redemption",
      desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      directors: ["Frank Darabont"],
      rating: 9.3,
      top_cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      genre: ["Drama"],
      year: 1994,
      length: 142,
      transactType: 0,
      rentPrice: 49,
      buyPrice: 59,
      isAvailable: true,
    },
    {
      id: 3,
      name: "The Godfather",
      desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      directors: ["Francis Ford Coppola"],
      rating: 9.2,
      top_cast: ["Marlon Brando", "Al Pacino", "James Caan"],
      genre: ["Crime", "Drama"],
      year: 1972,
      length: 205,
      transactType: 0,
      rentPrice: 99,
      buyPrice: 129,
      isAvailable: false,
    }

  ];

  cartItem: Movie[] = [];

  getMovies() {
    return this.movies;
  }

  getCurrMovie() {
    return this.curr_movie;
  }

}
