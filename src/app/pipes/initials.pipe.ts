import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/person';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(person: Person): any {
    if (person) {
      return person.firstname.substr(0, 1) + person.lastname.substr(0, 1);
    }

    return null;
  }

}
