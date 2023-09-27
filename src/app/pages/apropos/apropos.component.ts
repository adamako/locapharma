import { Component } from '@angular/core';
import {Personnel} from "../../layout/Api/interface";

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.scss']
})
export class AproposComponent {

  personnels:Personnel[] = [
    {
      nom:"KO Adama",
      img:"https://avatars.githubusercontent.com/u/40002929?v=4",
      post:"Developper fullstack"
    },
    {
      nom:"KO Adama",
      img:"https://avatars.githubusercontent.com/u/40002929?v=4",
      post:"Developper fullstack"
    },
    {
      nom:"KO Adama",
      img:"https://avatars.githubusercontent.com/u/40002929?v=4",
      post:"Developper fullstack"
    },
    {
      nom:"KO Adama",
      img:"https://avatars.githubusercontent.com/u/40002929?v=4",
      post:"Developper fullstack"
    },
    {
      nom:"KO Adama",
      img:"https://avatars.githubusercontent.com/u/40002929?v=4",
      post:"Developper fullstack"
    }
  ]

}
