import { Component } from '@angular/core';
import { Me } from './shared/interfaces/me.interface';
import { ConfigurationService } from './shared/services/configuration/configuration.service';
import { MeService } from './shared/services/me/me.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private configurationService: ConfigurationService,
    private meService: MeService
  ) {
    this.configurationService.initializeIcons();
    this.meService.getMe().subscribe((me: Me) => {
      this.meService.me = me;
    });
  }
}
