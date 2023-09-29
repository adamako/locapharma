import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pharmacy } from '../../models/Pharmacy';
import { GooglePlaceDetails } from '../../models/GooglePlaceDetail';
import { PharmacyService } from '../../services/pharmacy.service';

@Component({
  selector: 'app-pharmacy-details',
  templateUrl: './pharmacy-details.component.html',
  styleUrls: ['./pharmacy-details.component.scss'],
})
export class PharmacyDetailsComponent implements OnInit {
  pharmacy: Pharmacy | undefined;
  pharmacyDetails: GooglePlaceDetails | undefined;

  constructor(
    private router: Router,
    private pharmacyService: PharmacyService,
  ) {
    const navigation = this.router.getCurrentNavigation();
    // @ts-ignore
    this.pharmacy = navigation?.extras?.state['pharmacy'];
  }

  ngOnInit(): void {
    this.getPharmacyDetails();
  }

  getPharmacyDetails() {
    try {
      if (this.pharmacy) {
        this.pharmacyService
          .getPharmacyDetails(this.pharmacy.place_id)
          .subscribe((res: any) => {
            this.pharmacyDetails = res.result;
          });
      }
    } catch (e) {
      console.log(e);
    }
  }

  goBack() {
    this.router.navigate(['/pharmacies']);
  }

  openGoogleMaps() {
    if (this.pharmacyDetails) {
      window.open(
        `https://maps.google.com/?q=${this.pharmacyDetails.geometry.location.lat},${this.pharmacyDetails.geometry.location.lng}`,
        '_blank',
      );
    }
  }
}
