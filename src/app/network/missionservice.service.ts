import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../models/mission';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Missionservice {
  private URL = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.URL);
  }

  getMissionsByYear(year: string): Observable<Mission[]> {
    const url = `${this.URL}?launch_year=${year}`;
    return this.http.get<Mission[]>(url);
  }

  getMissionById(flightNumber: number): Observable<Mission> {
    const url = `${this.URL}/${flightNumber}`;
    console.log(url)
    return this.http.get<Mission>(url);
  }
}

