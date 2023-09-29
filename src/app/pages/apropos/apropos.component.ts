import { Component } from '@angular/core';
import { Personnel } from '../../layout/Api/interface';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.scss'],
})
export class AproposComponent {
  personnels: Personnel[] = [
    {
      nom: 'KO Adama',
      img: 'assets/authors/pigeon.png',
      post: 'Developper fullstack',
    },
    {
      nom: 'Nienaba Jean Jacques',
      img: 'assets/authors/jean.jpg',
      post: 'Developper web',
    },
    {
      nom: 'Tanou Ben Bechir',
      img: 'assets/authors/tanou.png',
      post: 'IT Officer',
    },
    {
      nom: 'Benon Gisèle',
      img: 'assets/authors/benon.png',
      post: 'Data manager',
    },
    {
      nom: 'Compaoré Franck Bienvenue',
      img: 'assets/authors/franck.png',
      post: 'Developper fullstack',
    },
  ];
}
