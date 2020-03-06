import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  users: User;
  elem;
  fullScreen;
  closeFullScreen;
  constructor(
    private authService: AuthService,
    private route: Router,
    private userService: UsersService,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit() {
    this.elem = document.documentElement;
    this.users = new User('', '', '');
    this.userService.getUser().then((user: User) => {
      this.users = user;
    });
    this.fullScreen = true;
    this.closeFullScreen = false;
  }

  logOut() {
    this.authService.signOutUser();
    this.route.navigate(['/sign-in']);
  }

  onFullScreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
      this.fullScreen = false;
      this.closeFullScreen = true;
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }
  onCloseFullScreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
      this.fullScreen = true;
      this.closeFullScreen = false;
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }
}
