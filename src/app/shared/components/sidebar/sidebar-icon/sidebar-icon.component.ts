import { Component, Input } from '@angular/core';
import { Channel } from 'src/app/shared/interfaces/channel.interface';

@Component({
  selector: 'sidebar-icon',
  templateUrl: './sidebar-icon.component.html',
  styleUrls: ['./sidebar-icon.component.scss'],
})
export class SidebarIconComponent {
  @Input() channel: Channel;
  constructor() {}
}
