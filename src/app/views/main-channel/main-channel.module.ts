import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'src/shared/components/sidebar/sidebar.module';
import { MainChannelRoutingModule } from './main-channel-routing.module';
import { MainChannelComponent } from './main-channel.component';

@NgModule({
  declarations: [MainChannelComponent],
  imports: [CommonModule, MainChannelRoutingModule, SidebarModule],
})
export class MainChannelModule {}
