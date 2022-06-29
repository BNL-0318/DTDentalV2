import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-manipulation',
  templateUrl: './manipulation.component.html',
  styleUrls: ['./manipulation.component.scss'],
})
export class ManipulationComponent implements OnInit {
  @Input() icon?: string;
  constructor() {}

  ngOnInit() {}
}
