import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ShareModule } from 'src/app/share/share.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing';

@NgModule({
  imports: [CommonModule, MainRoutingModule, ShareModule, FormsModule],
  declarations: [MainComponent],
})
export class MainModule {}
