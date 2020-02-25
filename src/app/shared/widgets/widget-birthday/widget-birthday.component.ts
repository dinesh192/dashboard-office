import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-widget-birthday',
  templateUrl: './widget-birthday.component.html',
  styleUrls: ['./widget-birthday.component.scss']
})
export class WidgetBirthdayComponent implements OnInit, OnDestroy {
  moment: any = moment;
  usersBirthdayDate: User[];
  usersSubscription: Subscription;
  arrayBirthday = [];
  actualYear = new Date();
  constructor(
    private userService: UsersService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getBirthdayDate();
  }

  getBirthdayDate() {
    this.spinner.show();
    this.usersSubscription = this.userService.birthdaySubject.subscribe(
      data => {
        this.usersBirthdayDate = data;
        this.arrayBirthday = _.values(this.usersBirthdayDate);
        this.arrayBirthday.sort(this.sortByDateNoYear);
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
      }
    );
    this.userService.getAllUsers();
    this.userService.emitBirthday();
  }
  sortByDateNoYear(adate, bdate) {
    let results;
    const lhdate = moment(adate.birthdayDate);
    const rhdate = moment(bdate.birthdayDate);
    results =
      lhdate.month() > rhdate.month()
        ? 1
        : lhdate.month() < rhdate.month()
        ? -1
        : 0;
    if (results === 0) {
      results =
        lhdate.date() > rhdate.date()
          ? 1
          : lhdate.date() < rhdate.date()
          ? -1
          : 0;
    }
    return results;
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
}
