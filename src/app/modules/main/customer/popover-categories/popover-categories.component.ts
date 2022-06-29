import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popover-categories',
  templateUrl: './popover-categories.component.html',
  styleUrls: ['./popover-categories.component.scss'],
  host: {
    class: 'flex w-full',
  },
})
export class PopoverCategoriesComponent implements OnInit {
  isOpenSelect = false;
  @Input() valuePopoverCatergories?: Array<object>;
  @Input() dataPopoverCatergories?: Array<object>;
  @Output() valuePopoverCatergoriesChange = new EventEmitter();
  visible1: boolean = false;
  apply1(): void {
    this.visible1 = false;
    this.valuePopoverCatergoriesChange.emit(this.valuePopoverCatergories);
  }
  change1(value: boolean): void {
    // console.log(value);
  }
  constructor() {}

  ngOnInit(): void {}
  onSearchSelect(i: any) {
    this.isOpenSelect = false;
  }
}
