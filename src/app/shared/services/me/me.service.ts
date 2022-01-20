import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Me } from '../../interfaces/me.interface';

@Injectable({
  providedIn: 'root',
})
export class MeService {
  private _me: Me;

  constructor(private httpClient: HttpClient) {}

  public get me(): Me {
    return this._me;
  }

  public set me(_me: Me) {
    this._me = _me;
  }

  public getMe(): Observable<Me> {
    const url: string = 'assets/mocks/getMe.json';
    return this.httpClient.get<any>(url, { responseType: 'json' });
  }
}
