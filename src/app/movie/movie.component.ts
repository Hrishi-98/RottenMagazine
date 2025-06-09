import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RatingComponent } from "../services/feature/rating/rating.component";
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [HeaderComponent, RatingComponent,HttpClientModule,NgFor,DatePipe],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit{

type='';
id='';
url='';
movies:any;
movie:any;


  constructor(private route: ActivatedRoute , private httpclient:HttpClient){}

  ngOnInit(): void {
      this.type = this.route.snapshot.params['type'];
      this.id = this.route.snapshot.params['id'];
      if(this.type == 'trending'){
        this.url = 'http://localhost:4200/data/trending-movies.json';
      }
      if(this.type == 'theatre'){
        this.url = 'http://localhost:4200/data/theatre-movies.json';
      }
     if(this.type == 'popular'){
        this.url = 'http://localhost:4200/data/popular-movies.json';
     }
    this.getMovie();
  }

  getMovie(){

   this.httpclient.get(this.url).subscribe((movies)=>{
    this.movies=movies;
    let index= this.movies.findIndex((movie: { id: string; }) => movie.id==this.id)
    if(index  >  -1)
    {
      this.movie = this.movies[index];
    }
    }
    )

  }
}
