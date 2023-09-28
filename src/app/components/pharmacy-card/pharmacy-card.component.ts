import {Component, Input} from '@angular/core';
import {Pharmacy} from "../../models/Pharmacy";

@Component({
  selector: 'app-pharmacy-card',
  templateUrl: './pharmacy-card.component.html',
  styleUrls: ['./pharmacy-card.component.scss']
})
export class PharmacyCardComponent {
  @Input() pharmacy: Pharmacy | undefined;
}
