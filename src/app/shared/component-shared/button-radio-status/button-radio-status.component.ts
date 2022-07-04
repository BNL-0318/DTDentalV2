import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as models from 'src/app/core/models';
@Component({
  selector: 'app-button-radio-status',
  templateUrl: './button-radio-status.component.html',
  styleUrls: ['./button-radio-status.component.scss'],
})
export class ButtonRadioStatusComponent implements OnInit {
  @Input() numberFilter = 0;
  @Output() numberFilterChange = new EventEmitter<number>();
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
    this.numberFilter = 1;
    this.dataRadioStatus?.forEach((item) => {
      if (
        item.valueFil !== null &&
        item.valueFil !== undefined &&
        item.defaultValue == null
      ) {
        this.numberFilter = this.numberFilter + 1;
      }
    });
    this.visibleRadioStatus = false;
    this.visibleRadioStatusChange.emit(this.visibleRadioStatus);
    this.dataRadioStatusChange.emit(this.dataRadioStatus);
    this.numberFilterChange.emit(this.numberFilter);
    console.log(this.dataRadioStatus);
  }
  constructor() {}

  ngOnInit() {
    this.numberFilter;
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
