
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay} from 'rxjs/operators';

export interface Person {
    id: string;
    isActive: boolean;
    age: number;
    name: string;
    disabled?: boolean;
}

@Injectable({
    providedIn: 'root'
})

export class DataService {
  constructor() { }
  
  getPeople(term: string =''): Observable<Person[]> {
    let items = getMockPeople();
    if (term) {
      items = items.filter(x => x.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }
}

function getMockPeople() {
    return [
        {
            'id': '5a15b13c2340978ec3d2c0ea',
            'isActive': true,
            'age': 23,
            'name': 'Karyn Wright',
        },
        {
            'id': '5a15b13c2340978ec3d2c0ea_2',
            'isActive': false,
            'age': 35,
            'name': 'Rochelle Estes',
            'disabled': true,
        },
        {
            'id': '5a15b13c663ea0af9ad0dae8_3',
            'isActive': false,
            'age': 25,
            'name': 'Mendoza Ruiz',
        },
        {
            'id': '5a15b13cc9eeb36511d65acf_4',
            'isActive': false,
            'age': 39,
            'name': 'Rosales Russell',
        },
        {
            'id': '5a15b13c728cd3f43cc0fe8a_5',
            'isActive': true,
            'age': 32,
            'name': 'Marquez Nolan',
            'disabled': true,
        },
    ]
}

