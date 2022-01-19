import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Channel } from '../../interfaces/channel.interface';

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  constructor(private httpClient: HttpClient) {}

  public getServers(): Observable<Channel[]> {
    const url: string = 'assets/mocks/getServers.json';
    return this.httpClient.get<any>(url, { responseType: 'json' });
  }
}
