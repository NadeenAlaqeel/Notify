import { Component, inject, Input, OnInit } from '@angular/core';
import { Eventmodel } from '../../Data/Event.model';
import { EventsService } from '../../Controllers/events.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AnnouncementService } from '../../Controllers/announcement.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../dialog/dialog.component';
import { ToastrService } from 'ngx-toastr';
import { EmailService } from '../../Controllers/email.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports:[DatePipe]
})
export class DashboardComponent implements OnInit {
 constructor(private router :Router ,private dialog: MatDialog,private toastr: ToastrService, private emailService: EmailService){}
  private newevent = inject(EventsService)
  private Announcement=inject(AnnouncementService)

 Upcoming !: Eventmodel
 newAnnouncement !: any

 ngOnInit()  {


  this.Upcoming=this.newevent.getEvents()[0];
  this.newAnnouncement=this.Announcement.getAnnouncements();

}
gotoadd(){

  this.router.navigate(['/AddAnnouncements'])
}
  gotoDelete(id :string){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: { message: 'Are you sure you want to delete this event?' }
    });

    // Handle the dialog result
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.newAnnouncement = this.Announcement.delete(id);
        this.toastr.error('Announcement deleted successfully!', 'Deleted'); 
      }
    });

}
sendemail(email : String ,title: String ,message: String){
  this.toastr.warning("Sending email")

  this.emailService.sendEmail(email,title,message)
  .subscribe((response) => {
    console.log(response); // After 2 seconds
    this.toastr.success("Email was successfully sent")

  });

}
}