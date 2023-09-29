import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PharmaciesComponent } from './pages/pharmacies/pharmacies.component';
import { SharedCommonsModule } from './pages/shared-commons/shared-commons.module';
import { MapComponent } from './pages/map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { NgMapsCoreModule } from '@ng-maps/core';
import { NgMapsGoogleModule } from '@ng-maps/google';
import { environment } from './environments/environment';
import { PharmacyCardComponent } from './components/pharmacy-card/pharmacy-card.component';
import { PharmacyDetailsComponent } from './pages/pharmacy-details/pharmacy-details.component';
import { RatingItemComponent } from './components/rating-item/rating-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AproposComponent,
    FooterComponent,
    HeaderComponent,
    PharmaciesComponent,
    MapComponent,
    PharmacyCardComponent,
    PharmacyDetailsComponent,
    RatingItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedCommonsModule,
    HttpClientModule,
    NgMapsCoreModule,
    NgMapsGoogleModule.forRoot({
      apiKey: environment.apiKey,
      libraries: ['places'],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
