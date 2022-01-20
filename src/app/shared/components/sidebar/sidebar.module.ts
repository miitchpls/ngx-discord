import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { UserPanelModule } from './user-panel/user-panel.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, UserPanelModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
