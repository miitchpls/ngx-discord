import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { localConfig } from '../../configurations/local.config';
import { ICONS, ICONS_PATH } from '../../constants';
import { Config } from '../../interfaces/config.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  public get config(): Config {
    return localConfig;
  }

  /**
   * Registers the list of icons by URL in the default namespace.
   */
  public initializeIcons(): void {
    ICONS.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `${ICONS_PATH}${icon}.svg`
        )
      );
    });
  }
}
