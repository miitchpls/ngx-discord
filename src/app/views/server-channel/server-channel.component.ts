import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-channel',
  templateUrl: './server-channel.component.html',
  styleUrls: ['./server-channel.component.scss'],
})
export class ServerChannelComponent implements OnInit {
  constructor() {
    // TODO navigate back to @me if server doesnt exist or is not visible to the user
  }

  ngOnInit(): void {}
}
