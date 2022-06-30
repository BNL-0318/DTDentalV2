import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as models from 'src/app/core/models';
@Component({
  selector: 'app-button-radio-status',
  templateUrl: './button-radio-status.component.html',
  styleUrls: ['./button-radio-status.component.scss'],
})
export class ButtonRadioStatusComponent implements OnInit {
  @Input() dataRadioStatus?: Array<models.FilterStatus>;
  @Output() dataRadioStatusChange = new EventEmitter<
    Array<models.FilterStatus>
  >();
  @Input() visibleRadioStatus: boolean = false;
  @Output() visibleRadioStatusChange = new EventEmitter<boolean>();

  close1(): void {
    this.visibleRadioStatus = false;
    this.visibleRadioStatusChange.emit(this.visibleRadioStatus);
  }
  apply1(): void {
    console.log(this.dataRadioStatus);
    this.visibleRadioStatus = false;
    this.visibleRadioStatusChange.emit(this.visibleRadioStatus);
    this.dataRadioStatusChange.emit(this.dataRadioStatus);
  }
  constructor() {}

  ngOnInit() {
  }

  cancelFilter() {
    this.dataRadioStatus?.map((item) => {
      item.defaultValue === null
        ? (item.valueFil = null)
        : item.defaultValue === item.valueFil
        ? item.defaultValue
        : (item.valueFil = item.defaultValue);
    });
  }
}
