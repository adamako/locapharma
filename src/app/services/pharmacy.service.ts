// pharmacy.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { LoadingService } from './loading.service';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PharmacyService {
  apiUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    private loadingSvc: LoadingService,
  ) {}

  getPharmacies(city: string, pageToken?: string) {
    this.loadingSvc.show();
    let params = {
      search: `pharmacies in ${city} ,burkina faso`.toLowerCase(),
    };

    if (pageToken && pageToken.length > 0) {
      // @ts-ignore
      params['pagetoken'] = pageToken;
    }

    return this.http
      .get(`${this.apiUrl}/google-maps`, { params: params })
      .pipe(finalize(() => this.loadingSvc.hide()));
  }

  getPharmacyDetails(placeId: string) {
    this.loadingSvc.show();

    let params = {
      place_id: placeId,
    };

    return this.http
      .get(this.apiUrl + '/google-maps-details', {
        params: params,
      })
      .pipe(finalize(() => this.loadingSvc.hide()));
  }
}
