import { UserStatus } from '../enums/user-status.enum';

export interface User {
  id: string;
  name: string;
  code: string;
  avatar: string;
  status: UserStatus;
}
