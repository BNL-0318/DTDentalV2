import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { DataDot } from '../../model/data-menu.model';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  
})
export class MenuComponent implements OnInit {
  isCollapsed = false;
  lstMenu3 =  DataDot;
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
