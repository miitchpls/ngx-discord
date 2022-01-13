import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelsService } from '../../services/channels/channels.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public activeChannel: string | null;
  public servers: any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private channelsService: ChannelsService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.activeChannel = params.get('channel');
    });
    this.getServers();
  }

  ngOnInit(): void {}

  private getServers(): void {
    this.channelsService.getServers().subscribe((data) => {
      if (!data) return;
      this.servers = data;
    });
  }

  public goToChannel(channel: string): void {
    this.router.navigate(['channels', channel]);
  }
}
