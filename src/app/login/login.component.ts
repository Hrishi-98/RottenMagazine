import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  uname=''
  password =''
  errorMsg =  '';


authService :AuthService = inject(AuthService);
router :Router = inject(Router);
  onLogin(){
    if(this.uname.trim().length===0){
      this.errorMsg='UserName required'
    }
    else  if(this.password.trim().length===0){
      this.errorMsg='Password required'
    }
    else{
      this.errorMsg=''
      let res = this.authService.login(this.uname,this.password)
      if(res=== 200){
        this.router.navigate(['home'])
      }
      if(res=== 403){
        this.errorMsg='Invalid Credentials'
      }
    }

  }
}
