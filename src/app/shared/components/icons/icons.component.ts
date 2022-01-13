import { Injectable, Input } from '@angular/core';

@Injectable()
export abstract class IconComponent {
  @Input() width: number = 28;
  @Input() height: number = 28;
}
