import { MovieDetailsComponent } from './movie-details.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './../movie.service';

describe('MovieDetailsComponent', () => {
  let movies: any[];
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserModule, FormsModule, HttpClientModule],
      declarations: [MovieDetailsComponent],
    }).compileComponents();

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
        inCart: false,
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
        inCart: false,
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
        transactType: 0,
        rentPrice: 99,
        buyPrice: 129,
        isAvailable: false,
        inCart: false,
      },
    ];
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Display Movies on Movies Page', () => {
    // component.selectedMembersCount = 0;

    component.addToCart(movies[0], 1);
    const movieFixture = TestBed.createComponent(MovieDetailsComponent);
    const movieInstance = movieFixture.componentInstance;
    // movieInstance.movies = movies;
    movieFixture.detectChanges();
    expect(
      movieFixture.debugElement.queryAll(By.css('.movies')).length
    ).toEqual(0);
  });

  // it('Display Movies on Movies Page', () => {
  //   const movieFixture = TestBed.createComponent(MovieComponent);
  //   const movieInstance = movieFixture.componentInstance;
  //   movieInstance.movies = movies;
  //   movieFixture.detectChanges();
  //   expect(
  //     movieFixture.debugElement.queryAll(By.css('.movies')).length
  //   ).toEqual(4);
  // });

  // it('Movie not available', () => {
  //   const movieFixture = TestBed.createComponent(MovieComponent);
  //   const movieInstance = movieFixture.componentInstance;
  //   movieInstance.movies = movies;
  //   movieFixture.detectChanges();
  //   expect(
  //     movieFixture.debugElement.query(By.css('#not-available')).nativeElement
  //       .innerHTML
  //   ).toContain('Not Available');
  //   expect(
  //     movieFixture.debugElement.query(By.css('#not-available')).nativeElement
  //       .disabled
  //   ).toBeTruthy();
  // });

  // it('Movie Details Should display movie', () => {
  //   const movieDetailsFixture = TestBed.createComponent(MovieDetailsComponent);
  //   const movieDetailsInstance = movieDetailsFixture.componentInstance;
  //   movieDetailsInstance.movie = movies[1];
  //   movieDetailsFixture.detectChanges();
  //   expect(
  //     movieDetailsFixture.debugElement.query(By.css('#movie-name'))
  //       .nativeElement.innerHTML
  //   ).toContain('John Wick');
  // });

  // it('Cart to display movies', () => {
  //   const cartFixture = TestBed.createComponent(CartComponent);
  //   const cartInstance = cartFixture.componentInstance;
  //   cartInstance.cartItem = movies;
  //   cartFixture.detectChanges();
  //   expect(
  //     cartFixture.debugElement.queryAll(By.css('.cart-item')).length
  //   ).toEqual(4);
  // });

  // it('On Click remove cart items decreases', () => {
  //   const cartFixture = TestBed.createComponent(CartComponent);
  //   const cartInstance = cartFixture.componentInstance;
  //   cartInstance.cartItem = movies;
  //   cartFixture.detectChanges();

  //   expect(
  //     cartFixture.debugElement.queryAll(By.css('.cart-item')).length
  //   ).toEqual(4);
  //   cartFixture.nativeElement.querySelector('#remove-item').click();
  //   cartFixture.detectChanges();
  //   expect(
  //     cartFixture.debugElement.queryAll(By.css('.cart-item')).length
  //   ).toEqual(3);
  // });
});
