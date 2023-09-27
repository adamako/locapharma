import {Component, OnInit} from '@angular/core';
import {MapsAPILoader, NgMapsViewComponent} from "@ng-maps/core";
import {PharmacyService} from "../services/pharmacy.service";

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    private pharmacies: any[] | undefined; // Replace with actual pharmacy data
    constructor(private pharmacyService: PharmacyService) {

    }

    ngOnInit() {
    }
}
