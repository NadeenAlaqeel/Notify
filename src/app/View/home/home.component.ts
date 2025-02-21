import { DatePipe, TitleCasePipe } from '@angular/common';
import {  Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reminder } from '../../Data/Reminder';

function getRandomInt(max : number)  {
  return Math.floor(Math.random() * max);
}
@Component({
  selector: 'app-home',
  imports: [DatePipe,TitleCasePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private router = inject(Router);
  
  Dailydata !: Date;
title !:any ; 
  ngOnInit(): void {
    this.Dailydata=new Date();
    this.title=Reminder[getRandomInt(Reminder.length)].title;
  }
  gotologin(){

      this.router.navigate(['/Login'])



  }
}
