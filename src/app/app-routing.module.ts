import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PharmaciesComponent} from "./pages/pharmacies/pharmacies.component";
import {CardComponent} from "./pages/card/card.component";
import {AproposComponent} from "./pages/apropos/apropos.component";

const routes: Routes = [  {path: '', redirectTo: 'pharmacies', pathMatch: 'full'
},
  {path: 'pharmacies', component: PharmaciesComponent},
  {path: 'card', component: CardComponent},
  {path: 'apropos', component: AproposComponent}
//{path: 'not-found', component: NotFoundComponent},
//{ path: '**', redirectTo: '/notfound' },component: AproposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
