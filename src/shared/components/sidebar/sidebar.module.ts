import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { UserAvatarModule } from '../user-avatar/user-avatar.module';
import { SearchbarPanelComponent } from './searchbar-panel/searchbar-panel.component';
import { SidebarComponent } from './sidebar.component';
import { UserPanelModule } from './user-panel/user-panel.module';

@NgModule({
  declarations: [SidebarComponent, SearchbarPanelComponent],
  imports: [CommonModule, TranslateModule, UserPanelModule, UserAvatarModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
