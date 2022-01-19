import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { NavbarIconModule } from './navbar-icon/navbar-icon.module';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, NavbarIconModule, IconsModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
