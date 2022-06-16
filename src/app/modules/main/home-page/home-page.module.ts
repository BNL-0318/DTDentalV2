import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page.routing';
import { ShareModule } from 'src/app/share/share.module';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ShareModule
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
