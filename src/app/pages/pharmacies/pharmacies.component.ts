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
  nextPageToken: string = '';

  constructor(private pharmacyService: PharmacyService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(nextPageToken?: string) {
    this.pharmacyService.getPharmacies(nextPageToken).subscribe((data) => {
      // @ts-ignore
      this.pharmacies = Array.from(
        // @ts-ignore
        new Set([...this.pharmacies, ...data['results']]),
      );

      // @ts-ignore
      if (data['next_page_token']) {
        // @ts-ignore
        this.nextPageToken = data['next_page_token'];
      }
      console.log(data);
    });
  }

  handleNextPage() {
    this.fetchData(this.nextPageToken);
  }
}
