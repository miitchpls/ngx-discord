import { Component } from '@angular/core';
import { MeService } from 'src/shared/services/me/me.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public meService: MeService) {}
}
