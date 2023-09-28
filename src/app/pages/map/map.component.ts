import {Component, OnInit} from '@angular/core';
import {MapsAPILoader, NgMapsViewComponent} from "@ng-maps/core";
import {PharmacyService} from "../../services/pharmacy.service";
import {Pharmacy} from "../../models/Pharmacy";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
   pharmacies: Pharmacy[] | undefined; // Replace with actual pharmacy data
  constructor(private pharmacyService: PharmacyService) {

  }

  ngOnInit() {
    this.pharmacyService.getPharmacies().subscribe((data) => {
      // @ts-ignore
      this.pharmacies = data['results'];
    })
  }
}
