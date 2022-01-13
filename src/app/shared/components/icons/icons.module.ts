import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddIconComponent } from './icons/add-icon.component';
import { CompassIconComponent } from './icons/compass-icon.component';
import { DiscordIconComponent } from './icons/discord-icon.component';
import { DownloadIconComponent } from './icons/download-icon.component';

const ComponentsList = [
  AddIconComponent,
  CompassIconComponent,
  DiscordIconComponent,
  DownloadIconComponent,
];
@NgModule({
  declarations: ComponentsList,
  imports: [CommonModule],
  exports: ComponentsList,
})
export class IconsModule {}
