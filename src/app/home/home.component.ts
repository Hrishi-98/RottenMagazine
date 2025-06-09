import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from "../services/feature/rating/rating.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HttpClientModule, NgFor, NgbRatingModule, NgIf, RatingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
trendingMovies:any;
theatreMovies:any;
popularMovies:any;
constructor(private httpclient:HttpClient,private router:Router){}

ngOnInit(): void {
  this.getTrendingMovies();
  this.getTheatreMovies();
  this.getPopularMovies()
  
}


  getTrendingMovies(){
    this.httpclient.get('http://localhost:4200/data/trending-movies.json')
      .subscribe((movies) => {
        this.trendingMovies = movies;
        

      });

  }
  getTheatreMovies(){
    this.httpclient.get('http://localhost:4200/data/theatre-movies.json')
      .subscribe((movies) => {
        this.theatreMovies = movies;
        console.log(this.theatreMovies)

      });

  }
  getPopularMovies(){
    this.httpclient.get('http://localhost:4200/data/popular-movies.json')
      .subscribe((movies) => {
        this.popularMovies = movies;
        console.log(this.popularMovies)

      });

  }
  goToMoviePage(type:string,id:string){
    this.router.navigate(['movie',type,id]);
  }
}
