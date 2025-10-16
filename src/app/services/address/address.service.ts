import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private citiesUrl: string =
    'https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&fields=שם_ישוב';
  private streetsUrl: string =
    'https://data.gov.il/api/3/action/datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b&fields=שם_רחוב';
  cities: string[] = [];
  streets!: string[];

  constructor(private http: HttpClient) {}

  getCities(value: string): Observable<string[]> {
    return this.http.get<any>(this.citiesUrl).pipe(
      map((response) => {
        if (Array.isArray(response.result.records)) {
          return response.result.records
            .filter((c: any) => c['שם_ישוב'] && c['שם_ישוב'].startsWith(value))
            .map((c: any) => c['שם_ישוב']);
        } else {
          return [];
        }
      }),
      tap((cities: string[]) => {
        this.cities = cities;
      })
    );
  }

  getStreets(value: string, city?: string): Observable<string[]> {
    if (!city) {
      return this.http.get<any>(this.streetsUrl).pipe(
        map((response) => {
          if (Array.isArray(response.result.records)) {
            return response.result.records
              .filter(
                (s: any) => s['שם_רחוב'] && s['שם_רחוב'].startsWith(value)
              )
              .map((s: any) => s['שם_רחוב']);
          } else {
            return [];
          }
        })
      );
    }
    return this.http
      .get<any>(`${this.streetsUrl}&filters={"שם_ישוב":"${city}"}`)
      .pipe(
        map((response) => {
          if (Array.isArray(response.result.records)) {
            return response.result.records
              .filter(
                (s: any) => s['שם_רחוב'] && s['שם_רחוב'].startsWith(value)
              )
              .map((s: any) => s['שם_רחוב']);
          } else {
            return [];
          }
        })
      );
  }
}
