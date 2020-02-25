import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sidenavOpen = false;
  lockSidenav = true;
  displayLock = false;
  contentMargin: number;
  constructor() {}

  ngOnInit() {}

  openSideNav() {
    this.sidenavOpen = true;
    if (this.lockSidenav) {
      this.displayLock = true;
    } else {
      this.contentMargin = 13;
    }
  }
  closeSideNav() {
    this.contentMargin = 0.2;
    if (this.lockSidenav) {
      this.sidenavOpen = false;
      this.displayLock = false;
    } else {
      this.sidenavOpen = true;
      this.displayLock = true;
      this.contentMargin = 13;
    }
  }

  receiveEvent($event) {
    this.lockSidenav = $event;
  }
}
