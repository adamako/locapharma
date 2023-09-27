import {Component, Input} from '@angular/core';
import {Personnel} from "../../../layout/Api/interface";

@Component({
  selector: 'app-personnal-card',
  templateUrl: './personnal-card.component.html',
  styleUrls: ['./personnal-card.component.scss']
})
export class PersonnalCardComponent {

  @Input() personnel:Personnel | undefined;

}
