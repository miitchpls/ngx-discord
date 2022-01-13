import { Component } from '@angular/core';
import { IconComponent } from '../icons.component';

@Component({
  selector: 'download-icon',
  template: `
    <svg
      aria-hidden="false"
      [attr.width]="width"
      [attr.height]="height"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z"
      ></path>
    </svg>
  `,
  styleUrls: ['../icons.component.scss'],
})
export class DownloadIconComponent extends IconComponent {
  constructor() {
    super();
  }
}
