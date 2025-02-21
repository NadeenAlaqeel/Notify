import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../Controllers/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [RouterLink,RouterLinkActive,CommonModule,],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent  {
constructor(private authService: AuthService){}  
// flag for Login  or logout in the nav bar 
flag(): boolean {

  return this.authService.isLoggedIn(); 
}


logout(){
this.authService.logout()

}




}
