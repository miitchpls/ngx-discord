import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarModule } from '../shared/components/sidebar/sidebar.module';
import { ChannelsRoutingModule } from './channels-routing.module';
import { ChannelsComponent } from './channels.component';

@NgModule({
  declarations: [ChannelsComponent],
  imports: [CommonModule, ChannelsRoutingModule, SidebarModule],
})
export class ChannelsModule {}
