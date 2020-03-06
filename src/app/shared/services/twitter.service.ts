import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

export interface TwitterResponse {
  data: any;
  resp: any;
}

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  constructor(private http: HttpClient) {}
  user() {
    return this.http.get<TwitterResponse>(`${environment.apitwitter}/api/user`);
  }

  home(since?: string) {
    return this.http.get<TwitterResponse>(
      `${environment.apitwitter}/api/home?since=${since}`
    );
  }
}
