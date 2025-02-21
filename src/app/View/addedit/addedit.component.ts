import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup ,FormsModule,ReactiveFormsModule,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventsService } from '../../Controllers/events.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addedit',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './addedit.component.html',
  styleUrl: './addedit.component.css'
})
export class ADDEDITComponent implements OnInit{
    constructor(private router: ActivatedRoute ,private toastr: ToastrService) {}
    
    private service = inject(EventsService );
    private route = inject(Router);
   
    eventId: string = '';
EventEdit !: any
flag=signal(false);


    form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      location: new FormControl( '', Validators.required),
    });
  
  ngOnInit() {

    // Get event ID from route
    this.eventId = this.router.snapshot.paramMap.get('id') ?? '';

    // Check if we are in edit mode and  Fetch event data and fill the form

    if (this.eventId) {
      this.EventEdit=this.service.getEvent(this.eventId)
      this.form.controls.title.patchValue(this.EventEdit.title);
      
      
    }
  
  }
  onsumbit(){

    if(!this.eventId) {
  this.service.addEvent(
    this.form.value.title ?? "",
    this.form.value.description ?? "",
    this.form.value.date ? new Date(this.form.value.date) : new Date(), 
    this.form.value.location ?? ""
  );

this.route.navigate(['/Dashboard'])
this.toastr.success('Event added successfully!', 'Success'); 

  }
  else{

this.service.updateTask( 
  this.eventId,
this.form.value.description ?? "",
this.form.value.date ? new Date(this.form.value.date) : new Date(), 
this.form.value.location ?? ""
);

this.route.navigate(['/Events'])
this.toastr.warning('Event Updated successfully!', 'Success'); 


  }

}}
