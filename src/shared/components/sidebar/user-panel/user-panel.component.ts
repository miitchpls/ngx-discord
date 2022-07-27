import { Component } from '@angular/core';
import { MeService } from 'src/shared/services/me/me.service';

@Component({
  selector: 'user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent {
  public microphoneMuted: boolean = false;
  public audioMuted: boolean = false;

  constructor(public meService: MeService) {}

  /**
   * Enable/Disable the connected audio devices.
   *
   * If general is false only the microphone will be toggled.
   * Otherwise all the audio will be toggled.
   * General default is false.
   * @param general if the general audio should be toggled.
   */
  public toggleAudio(general?: boolean): void {
    // if the general audio is disabled, even if the user clicked for
    // toggle the microphone switch the audio instead.
    if (general || this.audioMuted) {
      this.audioMuted = !this.audioMuted;
    } else {
      // otherwise just simply toggle the mic
      this.microphoneMuted = !this.microphoneMuted;
    }
    //TODO manage sound effect - below just a try
    const audio = new Audio();
    audio.src = 'assets/effects/mute.wav';
    audio.load();
    audio.play();
  }
}
