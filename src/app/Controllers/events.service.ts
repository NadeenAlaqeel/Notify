import { Injectable, signal } from '@angular/core';
import { Events } from '../Data/Events';
import { Eventmodel } from '../Data/Event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  // Define events as a signal
  events = signal<Eventmodel[]>(Events);

  // Get all events
  getEvents() {
    return this.events();
  }

  // Get a single event by ID
  getEvent(Id: string) {
    return this.events().find(event => event.id === Id);
  }

  // Delete an event by ID
  deleteEvent(id: string) {
    this.events.update((currentEvents) =>
      currentEvents.filter((event) => event.id !== id)
    );
    return this.getEvents();
  }

  // Add a new event
  addEvent(title: string, description: string, date: Date, location: string) {
    this.events.update((currentEvents) => [
      {
        id: Math.floor(Math.random()).toString(),
        title: title,
        description: description,
        Time: date,
        location: location,
      },
      ...currentEvents, // Add the new event at the beginning
    ]);
    return this.getEvents();
  }

  // Update an event
  updateTask(id: string, description: string, date: Date, location: string) {
    this.events.update((currentEvents) =>
      currentEvents.map((event) =>
        event.id === id
          ? {
              ...event,
              description: description,
              Time: date,
              location: location,
            }
          : event
      )
    );
    return this.getEvents();
  }
}