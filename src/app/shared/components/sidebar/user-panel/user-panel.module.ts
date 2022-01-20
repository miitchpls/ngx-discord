import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UserAvatarModule } from '../../user-avatar/user-avatar.module';
import { UserPanelComponent } from './user-panel.component';

@NgModule({
  declarations: [UserPanelComponent],
  imports: [CommonModule, MatIconModule, UserAvatarModule],
  exports: [UserPanelComponent],
})
export class UserPanelModule {}
