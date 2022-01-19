import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../shared/components/navbar/navbar.module';
import { ChannelsRoutingModule } from './channels-routing.module';
import { ChannelsComponent } from './channels.component';

@NgModule({
  declarations: [ChannelsComponent],
  imports: [CommonModule, ChannelsRoutingModule, NavbarModule],
})
export class ChannelsModule {}
