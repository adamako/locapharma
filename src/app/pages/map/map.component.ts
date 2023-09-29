import { Component, OnInit } from '@angular/core';
import { MapsAPILoader, NgMapsViewComponent } from '@ng-maps/core';
import { PharmacyService } from '../../services/pharmacy.service';
import { Pharmacy } from '../../models/Pharmacy';
import { pharmacyData } from '../../data/pharmacyData';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  pharmacies: Pharmacy[] | undefined;
  localPharmacies: any = pharmacyData;

  constructor(private pharmacyService: PharmacyService) {}

  ngOnInit() {
    this.pharmacyService.getPharmacies('ouagadougou').subscribe((data) => {
      // @ts-ignore
      this.pharmacies = data['results'];
    });
  }
}
