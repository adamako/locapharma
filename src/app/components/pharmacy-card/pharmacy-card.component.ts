import { Component, Input } from '@angular/core';
import { Pharmacy } from '../../models/Pharmacy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmacy-card',
  templateUrl: './pharmacy-card.component.html',
  styleUrls: ['./pharmacy-card.component.scss'],
})
export class PharmacyCardComponent {
  @Input() pharmacy: Pharmacy | undefined;

  constructor(private router: Router) {}

  goToDetails(pharmacy: Pharmacy | undefined) {
    this.router.navigate(['/pharmacies', pharmacy?.place_id], {
      state: { pharmacy: pharmacy },
    });
  }
}
