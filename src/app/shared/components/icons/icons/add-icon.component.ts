import { Component } from '@angular/core';
import { IconComponent } from '../icons.component';

@Component({
  selector: 'add-icon',
  template: `
    <svg
      aria-hidden="false"
      [attr.width]="width"
      [attr.height]="height"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
      ></path>
    </svg>
  `,
  styleUrls: ['../icons.component.scss'],
})
export class AddIconComponent extends IconComponent {
  constructor() {
    super();
  }
}
