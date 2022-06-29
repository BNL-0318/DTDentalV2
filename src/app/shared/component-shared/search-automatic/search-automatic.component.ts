import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-automatic',
  templateUrl: './search-automatic.component.html',
  styleUrls: ['./search-automatic.component.scss'],
})
export class SearchAutomaticComponent implements OnInit {
  @Input() placeholder: string = 'Tìm kiếm';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  changeValueInput() {
    console.log(this.value);
    this.valueChange.emit(this.value);
  }
}
