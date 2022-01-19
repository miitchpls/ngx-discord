import { ConnectedPosition } from '@angular/cdk/overlay';
import { Component, Input } from '@angular/core';
import { Channel } from 'src/app/shared/interfaces/channel.interface';

@Component({
  selector: 'navbar-icon',
  templateUrl: './navbar-icon.component.html',
  styleUrls: ['./navbar-icon.component.scss'],
})
export class NavbarIconComponent {
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
