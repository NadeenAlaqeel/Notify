import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';  
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';  
import { CalendarOptions } from '@fullcalendar/core/index.js';
import { EventsService } from '../../Controllers/events.service';

@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [
    FullCalendarModule],
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class CalenderComponent implements OnInit {
  private service = inject(EventsService);
  calendarEvents: any[] = [];

  calendarOptions!: CalendarOptions;
   
  ngOnInit() {
    const events = this.service.getEvents(); 

    this.calendarEvents = events.map(event => ({
      title: event.title,
      date: event.Time, 
    }));

    // Configure calendar options
    this.calendarOptions = {
      initialView: 'dayGridMonth',  
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      events: this.calendarEvents,  
    };
  }
}
