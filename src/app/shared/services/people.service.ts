import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName: 'Pedro',
        lastName: 'Z da Silva',
        age: 60
      },
      {
        firstName: 'Maria',
        lastName: 'Fátima',
        age: 57
      },
      {
        firstName: 'Joao',
        lastName: 'Zeferino',
        age: 42
      },
      {
        firstName: 'Marcio',
        lastName: 'Nogueyra',
        age: 30
      },
    ]

    return of(peopleArray)
  }
}
