import { ConnectedPosition } from '@angular/cdk/overlay';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'navbar-icon',
  templateUrl: './navbar-icon.component.html',
  styleUrls: ['./navbar-icon.component.scss'],
})
export class NavbarIconComponent {
  @Input() name: string;
  @Input() unreadedChats: boolean;
  @Input() mentions?: number;

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
