import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AproposComponent} from './pages/apropos/apropos.component';
import {CardComponent} from './pages/card/card.component';
import {FooterComponent} from './pages/footer/footer.component';
import {HeaderComponent} from './pages/header/header.component';
import {PharmaciesComponent} from './pages/pharmacies/pharmacies.component';
import {SharedCommonsModule} from "./pages/shared-commons/shared-commons.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MapComponent} from './pages/map/map.component';
import {HttpClientModule} from "@angular/common/http";
import {NgMapsCoreModule} from "@ng-maps/core";
import {NgMapsGoogleModule} from "@ng-maps/google";
import {environment} from "./environments/environment";
import {PharmacyCardComponent} from './components/pharmacy-card/pharmacy-card.component';


@NgModule({
  declarations: [
    AppComponent,
    AproposComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    PharmaciesComponent,
    MapComponent,
    PharmacyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SharedCommonsModule,
    HttpClientModule,
    NgMapsCoreModule,
    NgMapsGoogleModule.forRoot({
      apiKey: environment.apiKey,
      libraries: ['places']
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
