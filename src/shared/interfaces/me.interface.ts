import { UserStatus } from '../enums/user-status.enum';

export interface Me {
  id: string;
  name: string;
  code: string;
  avatar: string;
  hasUnreadedChats: boolean;
  status: UserStatus;
}
