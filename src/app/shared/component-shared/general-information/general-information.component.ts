import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss'],
})
export class GeneralInformationComponent implements OnInit {
  @Input() type = 'text';
  @Input() img = '';
  @Input() title = '';
  @Input() value = '';
  constructor() {}

  ngOnInit(): void {}
}
