import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDividerModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule,
  MatCardModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { LineComponent } from './widgets/line/line.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { WeatherCardComponent } from './widgets/weather-card/weather-card.component';
import { CardLikeComponent } from './widgets/card-like/card-like.component';
import { WidgetClockComponent } from './widgets/widget-clock/widget-clock.component';
import { WidgetBirthdayComponent } from './widgets/widget-birthday/widget-birthday.component';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    SigninComponent,
    SignupComponent,
    LineComponent,
    CardComponent,
    WeatherCardComponent,
    CardLikeComponent,
    WidgetClockComponent,
    WidgetBirthdayComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatListModule,
    MaterialFileInputModule,
    HighchartsChartModule,
    NgxSpinnerModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    SignupComponent,
    SigninComponent,
    LineComponent,
    CardComponent,
    WeatherCardComponent,
    CardLikeComponent,
    WidgetClockComponent,
    WidgetBirthdayComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
