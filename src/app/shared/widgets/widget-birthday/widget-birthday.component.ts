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
	styleUrls: [ './widget-birthday.component.scss' ]
})
export class WidgetBirthdayComponent implements OnInit, OnDestroy {
	moment: any = moment;
	usersBirthdayDate: User[];
	usersSubscription: Subscription;
	arrayBirthday = [];
	actualYear = new Date();
	constructor(private userService: UsersService, private spinner: NgxSpinnerService) {}

	ngOnInit() {
		this.getBirthdayDate();
	}

	getBirthdayDate() {
		this.spinner.show();
		this.usersSubscription = this.userService.birthdaySubject.subscribe((data) => {
			this.usersBirthdayDate = data;
			this.arrayBirthday = _.values(this.usersBirthdayDate);
			this.arrayBirthday.sort(this.sortByBirthdayDate);
			this.spinner.hide();
		});
		this.userService.getAllUsers();
		this.userService.emitBirthday();
	}

	sortByBirthdayDate(a, b) {
		let needSort = 0;
		const today = moment().startOf('day');
		const aBirthday = moment(a.birthdayDate, 'YYYY-MM-DD');
		const bBirthday = moment(b.birthdayDate, 'YYYY-MM-DD');
		const aNextBirthday = moment().month(aBirthday.month()).date(aBirthday.date());
		const bNextBirthday = moment().month(bBirthday.month()).date(bBirthday.date());
		if (
			(bNextBirthday.isAfter(today) && aNextBirthday.isAfter(today)) ||
			(bNextBirthday.isBefore(today) && aNextBirthday.isBefore(today))
		) {
			needSort = bNextBirthday.isAfter(aNextBirthday) ? -1 : 1;
		} else {
			needSort = bNextBirthday.isAfter(today) ? 1 : -1;
		}

		return needSort;
	}

	ngOnDestroy(): void {
		this.usersSubscription.unsubscribe();
	}
}
