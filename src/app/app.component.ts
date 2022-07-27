import { Component } from '@angular/core';
import { Me } from 'src/shared/interfaces/me.interface';
import { ConfigurationService } from 'src/shared/services/configuration/configuration.service';
import { MeService } from 'src/shared/services/me/me.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public loaded: boolean = false;

  constructor(
    private configurationService: ConfigurationService,
    private meService: MeService
  ) {
    this.configurationService.initializeIcons();
    this.meService.getMe().subscribe((me: Me) => {
      this.meService.me = me;
      this.loaded = true;
    });
  }
}
