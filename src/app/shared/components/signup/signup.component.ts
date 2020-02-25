import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';

import { DateAdapter } from '@angular/material';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  errorMessage: string;
  hide = true;
  userInformations: User;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;
  emailPlaceholder: any;

  constructor(
    private authService: AuthService,
    private route: Router,
    private formBuilder: FormBuilder,
    private adapter: DateAdapter<any>,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.adapter.setLocale('fr');
    this.initForm();
    this.signUpForm.controls.firstName.valueChanges.subscribe(val => {
      this.emailPlaceholder = val;
    });
  }

  initForm() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]
      ],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthdayDate: ['', [Validators.required]],
      picture: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const email = this.signUpForm.get('email').value;
    const password = this.signUpForm.get('password').value;
    const firstName = this.signUpForm.get('firstName').value;
    const lastName = this.signUpForm.get('lastName').value;
    const birthdayDate = this.datePipe.transform(
      this.signUpForm.get('birthdayDate').value
    );

    const userInformations = new User(firstName, lastName, birthdayDate);
    if (this.fileUrl && this.fileUrl !== '') {
      userInformations.photoUrl = this.fileUrl;
    }
    this.authService.signUpUser(email, password, userInformations).then(
      () => {
        this.route.navigate(['/home']);
      },
      error => {
        this.errorMessage = error;
      }
    );
  }

  onUploadFile(file: File) {
    this.authService.uploadFile(file).then((url: string) => {
      this.fileUrl = url;
      this.fileIsUploading = false;
      this.fileUploaded = true;
    });
    this.fileIsUploading = true;
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }
}
