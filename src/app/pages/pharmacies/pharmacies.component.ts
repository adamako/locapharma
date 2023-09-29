import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../services/pharmacy.service';
import { Pharmacy } from '../../models/Pharmacy';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.scss'],
})
export class PharmaciesComponent implements OnInit {
  pharmacies: Pharmacy[] = [];
  nextPageToken: string | undefined = '';

  constructor(private pharmacyService: PharmacyService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(nextPageToken?: string) {
    try {
      this.pharmacyService.getPharmacies(nextPageToken).subscribe((data) => {
        // @ts-ignore
        this.pharmacies = [...this.pharmacies, ...data['results']];

        // @ts-ignore
        if (data['next_page_token'] !== undefined) {
          // @ts-ignore
          this.nextPageToken = data['next_page_token'];
        } else {
          this.nextPageToken = undefined;
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleNextPage() {
    if (this.nextPageToken) {
      this.fetchData(this.nextPageToken);
    }
  }
}
