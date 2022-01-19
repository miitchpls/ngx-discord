import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class IconRegistryService {
  private iconPath: string = 'assets/icons/';
  private iconList: string[] = ICONS;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  /**
   * Registers the list of icons by URL in the default namespace.
   */
  public initializeIcons(): void {
    this.iconList.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `${this.iconPath}${icon}.svg`
        )
      );
    });
  }
}
