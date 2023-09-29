// pharmacy.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PharmacyService {
  private apiKey: string = environment.apiKey;
  apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getPharmacies(pageToken?: string) {
    let params = {
      search: 'pharmacies in Ouagadougou , burkina faso',
    };

    if (pageToken && pageToken.length > 0) {
      // @ts-ignore
      params['pagetoken'] = pageToken;
    }

    return this.http.get(`${this.apiUrl}/google-maps`, { params: params });
  }

  getPharmacyDetails(placeId: string) {
    let params = {
      place_id: placeId,
    };

    return this.http.get(this.apiUrl + '/google-maps-details', {
      params: params,
    });
  }
}
