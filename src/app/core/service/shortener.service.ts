import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShortenerService {
  private http = inject(HttpClient);

  private shortenerUrl =
    'https://4oxs4uvyk5.execute-api.us-east-1.amazonaws.com/create';

  constructor() {}

  createShort(body: any): Observable<any> {
    return this.http.post(this.shortenerUrl, { body });
  }
}
