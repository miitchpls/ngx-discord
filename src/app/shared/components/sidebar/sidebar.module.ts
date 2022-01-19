import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { SidebarIconModule } from './sidebar-icon/sidebar-icon.module';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, SidebarIconModule, IconsModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
