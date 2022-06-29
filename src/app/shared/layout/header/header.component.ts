import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { DataService, Person } from 'src/app/core/services/service-demo.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public contact: number = 1;
  public contactOptions = [
    { id: 1, name: 'Elton John' },
    { id: 2, name: 'Elvis Presley' },
    { id: 3, name: 'Paul McCartney' },
    { id: 4, name: 'Elton John' },
    { id: 5, name: 'Elvis Presley' },
    { id: 6, name: 'Paul McCartney' },
  ];
  personOptionsdisplayWith!: Observable<Person[]> | [];
  persondisplayWith!: FormControl;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.personOptionsdisplayWith = this.loadData();
    this.persondisplayWith = new FormControl('', Validators.required);
  }
  loadData() {
    return this.dataService.getPeople();
  }
}
