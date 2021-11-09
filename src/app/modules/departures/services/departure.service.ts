import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartureService {

  apiURL: string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getStations(): Observable<any> {
    // calling service to get the departure Data 
    return this.http.get<any>(`${this.apiURL}/stations?Subscription-Key=${environment.SubscriptionKey}`)
    .pipe(
      map((res) => {
        return  res;
      })
    );
  }
  getDepartures(code: string): Observable<any> {
    // calling service to get the departure Data 
    return this.http.get<any>(`${this.apiURL}/departures?station=${code}&Subscription-Key=${environment.SubscriptionKey}`);
  }
  
}
