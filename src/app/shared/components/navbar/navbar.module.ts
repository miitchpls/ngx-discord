import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavbarIconModule } from './navbar-icon/navbar-icon.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, NavbarIconModule, MatIconModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
