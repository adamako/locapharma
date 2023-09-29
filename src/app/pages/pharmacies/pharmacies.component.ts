import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../services/pharmacy.service';
import { Pharmacy } from '../../models/Pharmacy';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.scss'],
})
export class PharmaciesComponent implements OnInit {
  pharmacies: Pharmacy[] = [];
  nextPageToken: string | undefined = '';
  isPageLoading$ = this.loadingService.loading;
  selectedCity: string = 'Ouagadougou';

  cities = [
    'Ouagadougou',
    'Bobo-Dioulasso',
    'Koudougou',
    'Banfora',
    'Ouahigouya',
    'Dédougou',
    'Kaya',
    'Tenkodogo',
    "Fada N'Gourma",
    'Dori',
    'Réo',
    'Houndé',
    'Gaoua',
    'Manga',
    'Ziniaré',
    'Koupéla',
    'Yako',
    'Diapaga',
    'Boulsa',
    'Garango',
    'Boromo',
    'Dano',
    'Léo',
    'Nouna',
    'Solenzo',
  ];

  constructor(
    private pharmacyService: PharmacyService,
    private loadingService: LoadingService,
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(nextPageToken?: string) {
    try {
      this.pharmacyService
        .getPharmacies(this.selectedCity, nextPageToken)
        .subscribe((data) => {
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

  onSelectedCity(value: any) {
    this.pharmacies = [];
    this.selectedCity = value.target.value;
    console.log(this.selectedCity);
    this.fetchData();
  }

  handleNextPage() {
    if (this.nextPageToken) {
      this.fetchData(this.nextPageToken);
    }
  }
}
