import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import * as constants from 'src/app/core/constants';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {
  isCollapsed = false;
  lstMenu3 = constants.DataDot;
  activeTab = 1;
  active = 1;
  active1 = 'top';

  setActiveTab(event: TDSSafeAny) {
    this.activeTab = event;
  }

  constructor() {}

  ngOnInit(): void {}

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  onOpenChange(e: boolean) {
    this.isCollapsed = e;
  }
}
