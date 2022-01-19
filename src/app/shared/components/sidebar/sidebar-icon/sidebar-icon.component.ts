import { ConnectedPosition } from '@angular/cdk/overlay';
import { Component, Input } from '@angular/core';
import { Channel } from 'src/app/shared/interfaces/channel.interface';

@Component({
  selector: 'sidebar-icon',
  templateUrl: './sidebar-icon.component.html',
  styleUrls: ['./sidebar-icon.component.scss'],
})
export class SidebarIconComponent {
  @Input() channel: Channel;

  public isHovering: boolean = false;
  public tooltipOverlayPositions: ConnectedPosition[] = [
    {
      originX: 'end',
      originY: 'center',
      overlayX: 'start',
      overlayY: 'center',
    },
  ];

  constructor() {}
}
