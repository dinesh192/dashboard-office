import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconRegistry, MatIconModule } from '@angular/material';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { DefaultModule } from './layouts/default/default.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { WeatherService } from './shared/services/weather.service';

import { CoreModule } from './core/core.module';
import { CdkColumnDef } from '@angular/cdk/table';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DefaultModule,
    MatIconModule,
    NgxSpinnerModule,
    CoreModule
  ],
  providers: [DatePipe, WeatherService, CdkColumnDef],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    ); // Or whatever path you placed mdi.svg at
  }
}
