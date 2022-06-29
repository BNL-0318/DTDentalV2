import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
})
export class AppointmentListComponent implements OnInit {
  isChangeStatus = false;
  @Input() status!: string;
  @Input() bgColor!: string;
  @Input() nameCustomer!: string;
  @Input() nPDoctor!: string;
  @Input() nameDoctor!: string;
  @Input() time!: string;
  constructor() {}

  ngOnInit(): void {}
}
