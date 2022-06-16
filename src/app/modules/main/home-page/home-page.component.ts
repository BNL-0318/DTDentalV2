import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataService, Person } from 'src/app/core/service/service-demo.service';
import { DataGeneralInfomation, GeneralInfomation } from 'src/app/share/model/general-infomation.model';
import { TDSModalService } from 'tds-ui/modal';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  dataGeneralInfomation: Array<GeneralInfomation> = DataGeneralInfomation;
  personOptionsdisplayWith!: Observable<Person[]> | [];
  tabsIcon2 = [
    {
      name: 'Tab 1',
      count: 99,
      content: "Content of Tab Pane 1"
    },
    {
      name: 'Tab 2',
      count: 85,
      content: "Content of Tab Pane 2"
    },
    {
      name: 'Tab 3',
      count: 80,
      content: "Content of Tab Pane 3"
    }
  ];

  constructor( private dataService: DataService) {}

  ngOnInit() {}
}
