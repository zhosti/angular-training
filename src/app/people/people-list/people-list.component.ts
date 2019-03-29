import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  public people: Person[] = [];

  constructor(private _apiService: ApiService) {
     this._apiService.people.subscribe(people => this.people = people);
   }

  ngOnInit() {
  }

}
