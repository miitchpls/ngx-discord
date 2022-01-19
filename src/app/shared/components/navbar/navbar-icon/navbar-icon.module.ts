import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';
import { NavbarIconComponent } from './navbar-icon.component';

@NgModule({
  declarations: [NavbarIconComponent],
  imports: [CommonModule, OverlayModule, IconsModule],
  exports: [NavbarIconComponent],
})
export class NavbarIconModule {}
