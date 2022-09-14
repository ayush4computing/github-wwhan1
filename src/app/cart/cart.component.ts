import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalAmt: number = 0;
  cartItem: Movie[] = []; 
  constructor(private movieService: MovieService, private router: Router) { 
    this.cartItem = this.movieService.cartItem;
    this.setTotalAmt();
  }

  ngOnInit(): void {
   
  }

  removeItem(movie: Movie){
    this.cartItem = this.cartItem.filter((m) => m.id != movie.id );
    this.setTotalAmt();
  }

  viewDetails(id:number){
    this.movieService.curr_movie = id;
    this.router.navigateByUrl("/details");

  }

  setTotalAmt(){
    this.cartItem.forEach( m => {
      if(m.transactType == 1){
        this.totalAmt = this.totalAmt + m.buyPrice;
      }else if(m.transactType == 2){
        this.totalAmt = this.totalAmt + m.rentPrice;

      }  
    })
  }
}
