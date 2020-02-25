import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  users: User;

  constructor(
    private authService: AuthService,
    private route: Router,
    private userService: UsersService
  ) {}

  ngOnInit() {
    this.users = new User('', '', '');
    this.userService.getUser().then((user: User) => {
      this.users = user;
    });
  }

  logOut() {
    this.authService.signOutUser();
    this.route.navigate(['/sign-in']);
  }
}
