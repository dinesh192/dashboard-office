import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() sidenavOpen: boolean;
  @Input() displayLock: boolean;
  @Output() lockSidenavEvent = new EventEmitter<boolean>();
  menuSidenav: Menu;
  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.getMenu().then((menuSidenav: Menu) => {
      this.menuSidenav = menuSidenav;
    });
  }

  toggleSideNavLock() {
    this.sidenavOpen = !this.sidenavOpen;
    this.lockSidenavEvent.emit(this.sidenavOpen.valueOf());
  }
}
