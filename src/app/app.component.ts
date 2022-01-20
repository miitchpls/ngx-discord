import { Component } from '@angular/core';
import { Me } from './shared/interfaces/me.interface';
import { IconRegistryService } from './shared/services/icon-registry/icon-registry.service';
import { MeService } from './shared/services/me/me.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private iconRegistryService: IconRegistryService,
    private meService: MeService
  ) {
    this.iconRegistryService.initializeIcons();
    this.meService.getMe().subscribe((me: Me) => {
      this.meService.me = me;
    });
  }
}
