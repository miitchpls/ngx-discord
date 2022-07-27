import { Component, Input } from '@angular/core';
import { UserStatus } from '../../enums/user-status.enum';

@Component({
  selector: 'user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent {
  @Input() avatar: string;
  @Input() status: UserStatus;
  constructor() {}
}
