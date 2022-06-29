import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as models from 'src/app/core/models';

@Component({
  selector: 'app-nav-filter',
  templateUrl: './nav-filter.component.html',
  styleUrls: ['./nav-filter.component.scss'],
})
export class NavFilterComponent implements OnInit {
  forcus = 0;
  @Input() listNavOrderState: Array<models.CommonTypeData> = [];
  @Output() iChangenavOrderState = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  changeINav(item: any, i: number): void {
    this.forcus = i;
    this.iChangenavOrderState.emit(item);
  }
}
