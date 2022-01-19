import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainChannelRoutingModule } from './main-channel-routing.module';
import { MainChannelComponent } from './main-channel.component';


@NgModule({
  declarations: [
    MainChannelComponent
  ],
  imports: [
    CommonModule,
    MainChannelRoutingModule
  ]
})
export class MainChannelModule { }
