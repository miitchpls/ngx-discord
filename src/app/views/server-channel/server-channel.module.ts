import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerChannelRoutingModule } from './server-channel-routing.module';
import { ServerChannelComponent } from './server-channel.component';


@NgModule({
  declarations: [
    ServerChannelComponent
  ],
  imports: [
    CommonModule,
    ServerChannelRoutingModule
  ]
})
export class ServerChannelModule { }
