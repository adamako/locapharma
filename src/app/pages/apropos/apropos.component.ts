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
      img:"assets/authors/pigeon.png",
      post:"Developper fullstack"
    },
    {
      nom:"Nienaba Jean Jacques",
      img:"https://avatars.githubusercontent.com/u/40002929?v=4",
      post:"Developper fullstack"
    },
    {
      nom:"Tanou Ben Bechir",
      img:"assets/authors/tanou.png",
      post:"IT Officer"
    },
    {
      nom:"Benon Gisèle",
      img:"assets/authors/benon.png",
      post:"Developper fullstack"
    },
    {
      nom:"Compaoré Franck Bienvenue",
      img:"assets/authors/franck.png",
      post:"Developper fullstack"
    }
  ]

}
