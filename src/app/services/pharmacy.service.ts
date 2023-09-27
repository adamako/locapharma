// pharmacy.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
  private apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) { }

  getPharmacies(location: string, pageToken?: string) {

    let params = {
      query: `pharmacy in ${location}`,
      key: this.apiKey
    };

    if (pageToken) {
      // @ts-ignore
      params['pagetoken'] = pageToken;
    }

    return this.http.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
      params: params
    });
  }
}
