import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _people: ReplaySubject<Person []> ;

  constructor() { }

  public getPeople(): Person[] {
    const person: Person[] = [
      { firstname: 'Ivan', lastname: 'Ivanov', birthDate: new Date() },
      { firstname: 'Georgi', lastname: 'Georgiev', birthDate: new Date() },
      { firstname: 'Petar', lastname: 'Petrov', birthDate: new Date() }
    ];

    return person;
  }

  public get people() {

    this._people = new ReplaySubject<Person []>(1);
    this._people.next(this.getPeople());

    return this._people;
  }
}
