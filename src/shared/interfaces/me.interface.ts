import { DirectMessage } from './direct-message.interface';
import { User } from './user.interface';

export interface Me extends User {
  hasUnreadedChats: boolean;
  directMessages: Array<DirectMessage>;
}
