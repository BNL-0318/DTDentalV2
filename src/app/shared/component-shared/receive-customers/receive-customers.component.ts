import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-receive-customers',
  templateUrl: './receive-customers.component.html',
  styleUrls: ['./receive-customers.component.scss'],
})
export class ReceiveCustomersComponent implements OnInit {
  isReload: boolean = false;
  @Input() status: string = '';
  @Input() nameCustomer: string = '';
  @Input() nameDoctor: string = '';
  @Input() time: string = '';
  radioValue = 'wait';
  isPopConfirm = false;
  constructor() {}

  ngOnInit(): void {
    this.changeStatus();
  }
  changeStatus(): any {
    this.status === 'Đang khám' ? 1 : 'Chờ khám' ? 2 : 3;
  }
  onPopConfirm() {
    this.isPopConfirm = !this.isPopConfirm;
  }
}
