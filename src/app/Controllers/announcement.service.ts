import { Injectable, signal } from '@angular/core';
import { Annmodel } from '../Data/Announcement.model';
import { Ann } from '../Data/Announcement';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

// Define events as a signal
Announcements = signal<Annmodel[]>(Ann);

  getAnnouncements() {
    return this.Announcements();
  }

  

  delete(id: string) {
    this.Announcements.update((currentAnnouncemen) =>
      currentAnnouncemen.filter((Announcemen) => Announcemen.id !== id)
    );
    return this.getAnnouncements();
  }

  add(title: string, description: string, date: Date) {
    this.Announcements.update((Announcemen) => [
      {
        id :Math.random().toString(),
        title: title,
        description: description,
        Time: date,
      },
      ...Announcemen, // Add the new event at the beginning
    ]);
    return this.getAnnouncements();
  }

  
}
