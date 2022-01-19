import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Channel } from '../../interfaces/channel.interface';
import { ChannelsService } from '../../services/channels/channels.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  // param "channel" retrieved from the url
  public activeChannel: string | null;

  // list of server to display in the navbar
  public servers: Channel[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private channelsService: ChannelsService
  ) {
    // subscribing to the url for catch changes and update the channel param
    this.route.paramMap.subscribe((params) => {
      this.activeChannel = params.get('channel');
    });
    this.getServers();
  }

  /**
   * Retrieves from API the list of servers to display
   */
  private getServers(): void {
    this.channelsService.getServers().subscribe((data: Channel[]) => {
      if (!data) return;
      this.servers = data;
    });
  }

  /**
   * Navigate to the specific channel of the given id.
   * @param channelID the id of the channel to navigate to
   */
  public goToChannel(channelID: string): void {
    this.router.navigate(['channels', channelID]);
  }
}
