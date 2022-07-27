export interface Channel {
  id: string;
  name: string;
  avatar: string;
  hasUnreadedChats: boolean;
  mentions: number;
}
