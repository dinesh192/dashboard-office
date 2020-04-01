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
  MatCardModule,
  MatBottomSheetModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { LineComponent } from './widgets/weather-line/line.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { WeatherCardComponent } from './widgets/weather-card/weather-card.component';
import { CardLikeComponent } from './widgets/card-like/card-like.component';
import { WidgetClockComponent } from './widgets/widget-clock/widget-clock.component';
import { WidgetBirthdayComponent } from './widgets/widget-birthday/widget-birthday.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TwitterComponent } from './widgets/twitter/twitter.component';
import { TweetPipe } from './pipes/tweet.pipe';
import { AddBirthdayComponent } from './widgets/add-birthday/add-birthday.component';
import { ListCollaboratorComponent } from './components/list-collaborator/list-collaborator.component';
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
    WidgetBirthdayComponent,
    TwitterComponent,
    TweetPipe,
    AddBirthdayComponent,
    ListCollaboratorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatListModule,
    MatBottomSheetModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MaterialFileInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FlexLayoutModule,
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
    TwitterComponent,
    CardComponent,
    WeatherCardComponent,
    CardLikeComponent,
    WidgetClockComponent,
    WidgetBirthdayComponent,
    ListCollaboratorComponent
  ],
  entryComponents: [AddBirthdayComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
