import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavbarIconComponent } from './navbar-icon.component';

@NgModule({
  declarations: [NavbarIconComponent],
  imports: [CommonModule, OverlayModule, MatIconModule],
  exports: [NavbarIconComponent],
})
export class NavbarIconModule {}
