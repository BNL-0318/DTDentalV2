import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing';

@NgModule({
  imports: [CommonModule, MainRoutingModule, SharedModule, FormsModule],
  declarations: [MainComponent],
})
export class MainModule {}
