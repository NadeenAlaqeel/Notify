import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../Controllers/events.service';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterEventsPipe } from '../../Controllers/filterandsearch.pipe';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'app-events',
  imports: [DatePipe,TitleCasePipe,FormsModule,FilterEventsPipe,CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit{
  constructor(private router: Router, private toastr: ToastrService, private dialog: MatDialog 
  ) {} 
private service = inject(EventsService);
Theevents!:any
filter: string = 'title';
search: string = '';
ngOnInit() {
this.Theevents=this.service.getEvents()

}

gotoEdit(id :string){

  this.router.navigate(['AddEdit', id]); 

  }
  gotoDelete(id :string){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: { message: 'Are you sure you want to delete this event?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // If the user confirmed, delete the event
        this.Theevents = this.service.deleteEvent(id);
        this.toastr.error('Event deleted successfully!', 'Deleted'); 
      }
    });


  }
  gotoAdd(){
    this.router.navigate(['/AddEdit'])

  }
}
