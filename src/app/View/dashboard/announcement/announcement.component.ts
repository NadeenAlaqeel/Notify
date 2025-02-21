import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnnouncementService } from '../../../Controllers/announcement.service';

@Component({
  selector: 'app-announcement',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.css'
})
export class AnnouncementComponent {

  constructor (private router :Router){}
  private newanuncement =inject(AnnouncementService)
    form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    });
  
oncancel(){

this.router.navigate(['/Dashboard'])
}
onsubmit(){
this.newanuncement.add(
  this.form.value.title ?? "",
  this.form.value.description ?? "",
  this.form.value.date ? new Date(this.form.value.date) : new Date(), 
);
this.router.navigate(['/Dashboard'])


}


}
