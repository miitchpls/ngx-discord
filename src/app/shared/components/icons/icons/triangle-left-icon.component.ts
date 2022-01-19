import { Component } from '@angular/core';
import { IconComponent } from '../icons.component';

@Component({
  selector: 'triangle-left-icon',
  template: `
    <svg
      aria-hidden="false"
      [attr.width]="width"
      [attr.height]="height"
      viewBox="0 0 24 24"
    >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <polygon fill="currentColor" points="19 21.997 0 12 19 1"></polygon>
      </g>
    </svg>
  `,
  styleUrls: ['../icons.component.scss'],
})
export class TriangleLeftIconComponent extends IconComponent {
  constructor() {
    super();
  }
}
