// pharmacy.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PharmacyService {
  private apiKey: string = environment.apiKey;
  apiUrl = 'http://localhost:3000/api/google-maps';

  constructor(private http: HttpClient) {}

  getPharmacies(pageToken?: string) {
    if (pageToken) {
      this.apiUrl += `?pagetoken=${pageToken}`;
      console.log(this.apiUrl);
    }

    return this.http.get(this.apiUrl);
  }
}
