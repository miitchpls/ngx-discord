import { Directive, Input } from '@angular/core';

@Directive()
export abstract class IconComponent {
  @Input() width: number = 28;
  @Input() height: number = 28;
}
