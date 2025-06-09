import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit{
  constructor( private router :Router, private authService: AuthService){

  }

  ngOnInit(): void {
      
  }
  Logout(){
    this.authService.logout()

  }
  goHome(){
    this.router.navigate(['home'])
  }

}
