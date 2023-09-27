import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {HttpClientModule} from "@angular/common/http";
import {NgMapsCoreModule} from "@ng-maps/core";
import { NgMapsGoogleModule} from "@ng-maps/google";
import {environment} from "./environments/environment";

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
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
