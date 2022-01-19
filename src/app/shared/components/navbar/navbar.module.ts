import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { NavbarIconModule } from './navbar-icon/navbar-icon.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, NavbarIconModule, IconsModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
