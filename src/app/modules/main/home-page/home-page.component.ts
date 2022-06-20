import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataService, Person } from 'src/app/core/service/service-demo.service';
import {
  DataGeneralInfomation,
  GeneralInfomation,
} from 'src/app/share/model/general-infomation.model';
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
      value: 1,
      name: 'Tất cả',
      count: 99,
      content: '<div>hello world</div>',
    },
    {
      value: 2,
      name: 'Chờ khám',
      count: 85,
      content: 'Content of Tab Pane 2',
    },
    {
      value: 3,
      name: 'Đang khám',
      count: 80,
      content: 'Content of Tab Pane 3',
    },
    {
      value: 4,
      name: 'Hoàn thành',
      count: 80,
      content: 'Content of Tab Pane 4',
    },
  ];
  tabsIcon = [
    {
      value: 1,
      name: 'Tất cả',
      count: 99,
      content: '<div>hello world</div>',
    },
    {
      value: 2,
      name: 'Đang hẹn',
      count: 85,
      content: 'Content of Tab Pane 2',
    },
    {
      value: 3,
      name: 'Đã đến',
      count: 80,
      content: 'Content of Tab Pane 3',
    },
    {
      value: 4,
      name: 'Hủy hẹn',
      count: 80,
      content: 'Content of Tab Pane 4',
    },
  ];
  dataReceiveCustomers = [
    {
      status: 'Đang khám',
      nameCustomer: 'Nguyễn Thành Công',
      nameDoctor: 'Nguyễn Kiêm Vũ',
      time: '09:00 AM',
    },
    {
      status: 'Đang khám',
      nameCustomer: 'Nguyễn Thành Công',
      nameDoctor: 'Nguyễn Kiêm Vũ',
      time: '09:00 AM',
    },
    {
      status: 'Chờ khám',
      nameCustomer: 'Nguyễn Thành Công',
      nameDoctor: 'Nguyễn Kiêm Vũ',
      time: '09:00 AM',
    },
    {
      status: 'Chờ khám',
      nameCustomer: 'Nguyễn Thành Công',
      nameDoctor: 'Nguyễn Kiêm Vũ',
      time: '09:00 AM',
    },
    {
      status: 'Đang khám',
      nameCustomer: 'Nguyễn Thành Công',
      nameDoctor: 'Nguyễn Kiêm Vũ',
      time: '09:00 AM',
      isReload: true,
    },
    {
      status: 'Đang khám',
      nameCustomer: 'Nguyễn Thành Công',
      nameDoctor: 'Nguyễn Kiêm Vũ',
      time: '09:00 AM',
    },
    {
      status: 'Hoàn thành',
      nameCustomer: 'Nguyễn Thành Công',
      nameDoctor: 'Nguyễn Kiêm Vũ',
      time: '09:00 AM',
    },
    {
      status: 'Hoàn thành',
      nameCustomer: 'Nguyễn Thành Công',
      nameDoctor: 'Nguyễn Kiêm Vũ',
      time: '09:00 AM',
    },
  ];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.personOptionsdisplayWith = this.loadData();
  }
  loadData() {
    return this.dataService.getPeople();
  }
  
}
