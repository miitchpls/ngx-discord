import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Channel } from '../../interfaces/channel.interface';
import { ConfigurationService } from '../configuration/configuration.service';

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  constructor(
    private httpClient: HttpClient,
    private configurationService: ConfigurationService
  ) {}

  public getServers(): Observable<Channel[]> {
    const url: string = this.configurationService.config.endpoints.getServers;
    return this.httpClient.get<any>(url, { responseType: 'json' });
  }
}
