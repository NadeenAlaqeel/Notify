import { Pipe, PipeTransform } from '@angular/core';
import { Eventmodel } from '../Data/Event.model';

@Pipe({
  name: 'filterEvents'
})
export class FilterEventsPipe implements PipeTransform {
  transform(events: Eventmodel[], searchTerm: string, filterBy: string): Eventmodel[] {
    if (!events || !searchTerm) {
      return events;
    }

    searchTerm = searchTerm.toLowerCase();

    switch (filterBy) {
      case 'title':
        return events.filter(event => event.title.toLowerCase().includes(searchTerm));
      case 'location':
        return events.filter(event => event.location.toLowerCase().includes(searchTerm));
      case 'date':
        return events.filter(event => event.Time.toDateString().includes(searchTerm));
      default:
        return events;
    }
  }
}