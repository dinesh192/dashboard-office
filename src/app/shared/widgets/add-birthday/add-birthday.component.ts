import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BirthdayAddService } from '../../services/birthday.service';
import { CollaboratorsClass } from '../../models/collaborator';
import { DateAdapter } from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-widget-add-birthday',
  templateUrl: './add-birthday.component.html',
  styleUrls: ['./add-birthday.component.scss']
})
export class AddBirthdayComponent implements OnInit {
  addCollabBirthday: FormGroup;
  errorMessage: string;
  moment: any = moment;
  maxDate: Date;
  constructor(
    private bottomSheetRef: MatBottomSheetRef<AddBirthdayComponent>,
    private formBuilder: FormBuilder,
    private birthdayService: BirthdayAddService,
    private adapter: DateAdapter<any>
  ) {
    const currentYear = new Date().getFullYear();
    this.maxDate = new Date(currentYear - 1, 11, 31);
  }

  ngOnInit() {
    this.adapter.setLocale('fr');
    this.initForm();
  }

  initForm() {
    this.addCollabBirthday = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthdayDate: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const firstName = this.addCollabBirthday.get('firstName').value;
    const lastName = this.addCollabBirthday.get('lastName').value;
    const birthdayDate = moment(
      this.addCollabBirthday.get('birthdayDate').value,
      'YYYY-MM-DD'
    ).format('YYYY-MM-DD');
    const userInformations = new CollaboratorsClass(
      firstName,
      lastName,
      birthdayDate
    );

    this.birthdayService.createCustomer(userInformations);
  }
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
