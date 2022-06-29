  import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page.routing';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
