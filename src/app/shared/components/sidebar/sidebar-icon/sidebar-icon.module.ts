import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';
import { SidebarIconComponent } from './sidebar-icon.component';

@NgModule({
  declarations: [SidebarIconComponent],
  imports: [CommonModule, OverlayModule, IconsModule],
  exports: [SidebarIconComponent],
})
export class SidebarIconModule {}
