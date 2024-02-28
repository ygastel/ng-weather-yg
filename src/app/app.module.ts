import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ZipcodeEntryComponent} from './zipcode-entry/zipcode-entry.component';
import {LocationService} from './location.service';
import {ForecastsListComponent} from './forecasts-list/forecasts-list.component';
import {WeatherService} from './weather.service';
import {CurrentConditionsComponent} from './current-conditions/current-conditions.component';
import {MainPageComponent} from './main-page/main-page.component';
import {RouterModule} from '@angular/router';
import {routing} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {GenericTabDisplayComponent} from './generic-tab-display/generic-tab-display.component';
import {HeaderSelectorDirective, TabContentSelectorDirective} from './header-selector.directive';

@NgModule({
  declarations: [
    AppComponent,
    ZipcodeEntryComponent,
    ForecastsListComponent,
    CurrentConditionsComponent,
      MainPageComponent,
      HeaderSelectorDirective,
      TabContentSelectorDirective
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        routing,
        ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
        GenericTabDisplayComponent
    ],
  providers: [LocationService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
