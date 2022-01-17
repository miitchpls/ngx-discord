export interface Channel {
  id: string;
  name: string;
  propic?: string;
  hasUnreadedChats?: boolean;
  mentions?: number;
}
