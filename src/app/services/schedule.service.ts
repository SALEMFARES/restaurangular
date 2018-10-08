import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Schedule } from '../modeles/schedule.inerface';
import { EveningEvent } from '../modeles/evening-event.interface';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient: HttpClient) { }
  search(term: string): Observable<EveningEvent[]> {
    const termLowercase = term.toLocaleLowerCase();
    return this.httpClient
                    .get<Schedule>('assets/schedules.json')
                    .pipe(
                      map(res => res.events.filter(evt => evt.title.toLocaleLowerCase().indexOf(term) > -1 || evt.description.toLocaleLowerCase().indexOf(term) > -1)),
                      tap (filteredEvents => console.log ('filteredEvents' , filteredEvents))
                    );


  }
}
