import { Component, OnInit } from '@angular/core';
import {
  DataGeneralInfomation,
  GeneralInfomation,
} from 'src/app/share/model/general-infomation.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  dataGeneralInfomation: Array<GeneralInfomation> = DataGeneralInfomation;
  constructor() {}

  ngOnInit() {}
}
