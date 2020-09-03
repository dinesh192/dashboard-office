import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable, throwError, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnDestroy {
  public signInForm: FormGroup;
  public errorMessage: string;
  public hide = true;
  public isSubmitted = false;
  public authentication: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private route: Router,
    private formBuilder: FormBuilder
  ) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)],
      ],
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (this.signInForm.valid) {
      this.authentication = this.authService
        .signInUser(this.signInForm.value.email, this.signInForm.value.password)
        .pipe(
          catchError((error) => {
            this.errorMessage = error;
            return throwError(error);
          })
        )
        .subscribe(() => {
          this.route.navigate(['/home']);
        });
    }
  }

  OnNavigate() {
    this.route.navigate(['/sign-up']);
  }

  public ngOnDestroy(): void {
    this.authentication.unsubscribe();
  }
}
