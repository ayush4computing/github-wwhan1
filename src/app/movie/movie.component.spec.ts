import { MovieComponent } from './movie.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './../movie.service';
import { Router } from '@angular/router';

describe('MovieComponent', () => {
  let movies: any[];
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
      ],
      declarations: [MovieComponent],
    }).compileComponents();
    router = TestBed.get(Router);

    movies = [
      {
        id: 0,
        name: 'Harr9 Potter',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies tellus congue, volutpat arcu a, mattis metus.Nulla fringilla mollis magna, at varius lorem aliquam tristique. Aliquam tortor eros, volutpat sed congue id, consectetur eu turpis. Ut tristique sed leo et volutpat. Proin vel urna ac sapien euismod luctus et sit amet ex.',
        directors: ['John', 'Peter'],
        rating: 9.2,
        top_cast: ['Daniel Radcliff', 'Emma Watson', 'Rupert Grint'],
        genre: ['Adventure', 'Action', 'Family'],
        year: 2005,
        length: 177,
        transactType: 1,
        rentPrice: 49,
        buyPrice: 99,
        isAvailable: true,
        inMovie: false,
      },

      {
        id: 1,
        name: 'John Wick',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies tellus congue, volutpat arcu a, mattis metus.Nulla fringilla mollis magna, at varius lorem aliquam tristique. Aliquam tortor eros, volutpat sed congue id, consectetur eu turpis. Ut tristique sed leo et volutpat. Proin vel urna ac sapien euismod luctus et sit amet ex.',
        directors: ['Chad', 'David'],
        rating: 7.4,
        top_cast: ['Keanu Reeves', 'Michael Nyqvist', 'Alfie Allen'],
        genre: ['Crime', 'Action', 'Thriller'],
        year: 2014,
        length: 177,
        transactType: 2,
        rentPrice: 39,
        buyPrice: 69,
        isAvailable: true,
        inMovie: false,
      },

      {
        id: 2,
        name: 'The Shawshank Redemption',
        desc: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        directors: ['Frank Darabont'],
        rating: 9.3,
        top_cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
        genre: ['Drama'],
        year: 1994,
        length: 142,
        transactType: 0,
        rentPrice: 49,
        buyPrice: 59,
        isAvailable: true,
        inMovie: false,
      },
      {
        id: 3,
        name: 'The Godfather',
        desc: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        directors: ['Francis Ford Coppola'],
        rating: 9.2,
        top_cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
        genre: ['Crime', 'Drama'],
        year: 1972,
        length: 205,
        transactType: 1,
        rentPrice: 99,
        buyPrice: 129,
        isAvailable: false,
        inMovie: false,
      },
    ];
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('viewDetails() should navigate to details page from movie page', () => {
    const movieFixture = TestBed.createComponent(MovieComponent);
    const movieInstance = movieFixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigateByUrl');
    movieInstance.viewDetails(1);
    expect(navigateSpy).toHaveBeenCalledWith('/details');
  });

  // it('Go to movie button should be visible when there is movie in movie', () => {
  //   const movieFixture = TestBed.createComponent(MovieComponent);
  //   const movieInstance = movieFixture.componentInstance;
  //   movieInstance.addToMovie(movies[0], 0);
  //   movieFixture.detectChanges();
  //   expect(movieInstance.movie).toBeDefined();

  //   expect(
  //     movieFixture.debugElement.queryAll(By.css('.go-to-movie-btn')).length
  //   ).toEqual(1);
  // });

  // it('Go to movie button should not be visible when the movie is empty', () => {
  //   const movieFixture = TestBed.createComponent(MovieComponent);
  //   const movieInstance = movieFixture.componentInstance;
  //   // movieInstance.addToMovie(movies[0], 0);
  //   movieFixture.detectChanges();
  //   // expect(movieInstance.movie).toBeDefined();

  //   expect(
  //     movieFixture.debugElement.queryAll(By.css('.go-to-movie-btn')).length
  //   ).toEqual(0);
  // });

  // it('Movie Details Should display director name on movie details page', () => {
  //   const movieDetailsFixture = TestBed.createComponent(MovieComponent);
  //   const movieDetailsInstance = movieDetailsFixture.componentInstance;
  //   movieDetailsInstance.movie = movies[0];
  //   movieDetailsFixture.detectChanges();
  //   expect(
  //     movieDetailsFixture.debugElement.queryAll(By.css('.director-name')).length
  //   ).toEqual(movies[0].directors.length);
  // });

  // // it('Display Movies on Movies Page', () => {
  // //   const movieFixture = TestBed.createComponent(MovieComponent);
  // //   const movieInstance = movieFixture.componentInstance;
  // //   movieInstance.movies = movies;
  // //   movieFixture.detectChanges();
  // //   expect(
  // //     movieFixture.debugElement.queryAll(By.css('.movies')).length
  // //   ).toEqual(4);
  // // });

  // // it('Movie not available', () => {
  // //   const movieFixture = TestBed.createComponent(MovieComponent);
  // //   const movieInstance = movieFixture.componentInstance;
  // //   movieInstance.movies = movies;
  // //   movieFixture.detectChanges();
  // //   expect(
  // //     movieFixture.debugElement.query(By.css('#not-available')).nativeElement
  // //       .innerHTML
  // //   ).toContain('Not Available');
  // //   expect(
  // //     movieFixture.debugElement.query(By.css('#not-available')).nativeElement
  // //       .disabled
  // //   ).toBeTruthy();
  // // });

  // // it('Movie Details Should display movie', () => {
  // //   const movieDetailsFixture = TestBed.createComponent(MovieComponent);
  // //   const movieDetailsInstance = movieDetailsFixture.componentInstance;
  // //   movieDetailsInstance.movie = movies[1];
  // //   movieDetailsFixture.detectChanges();
  // //   expect(
  // //     movieDetailsFixture.debugElement.query(By.css('#movie-name'))
  // //       .nativeElement.innerHTML
  // //   ).toContain('John Wick');
  // // });

  // it('setTotalAmt() should display total amount', () => {
  //   const movieFixture = TestBed.createComponent(MovieComponent);
  //   const movieInstance = movieFixture.componentInstance;
  //   movieInstance.movieItem = movies.slice(3);
  //   movieInstance.setTotalAmt();
  //   movieFixture.detectChanges();
  //   expect(movieInstance.totalAmt).toEqual(movies[3].buyPrice);
  // });

  it('Home page should display some movies', () => {
    const movieFixture = TestBed.createComponent(MovieComponent);
    const movieInstance = movieFixture.componentInstance;
    movieFixture.detectChanges();
    expect(movieInstance.movies).toBeDefined();
  });

  // // it('On Click remove movie items decreases', () => {
  // //   const movieFixture = TestBed.createComponent(MovieComponent);
  // //   const movieInstance = movieFixture.componentInstance;
  // //   movieInstance.movieItem = movies;
  // //   movieFixture.detectChanges();

  // //   expect(
  // //     movieFixture.debugElement.queryAll(By.css('.movie-item')).length
  // //   ).toEqual(4);
  // //   movieFixture.nativeElement.querySelector('#remove-item').click();
  // //   movieFixture.detectChanges();
  // //   expect(
  // //     movieFixture.debugElement.queryAll(By.css('.movie-item')).length
  // //   ).toEqual(3);
  // // });
});
