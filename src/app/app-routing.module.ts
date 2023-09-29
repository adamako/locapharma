import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmaciesComponent } from './pages/pharmacies/pharmacies.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { MapComponent } from './pages/map/map.component';
import { PharmacyDetailsComponent } from './pages/pharmacy-details/pharmacy-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'pharmacies', pathMatch: 'full' },
  { path: 'pharmacies', component: PharmaciesComponent },
  { path: 'map', component: MapComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'pharmacies/:id', component: PharmacyDetailsComponent },
  //{path: 'not-found', component: NotFoundComponent},
  //{ path: '**', redirectTo: '/notfound' },component: AproposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
