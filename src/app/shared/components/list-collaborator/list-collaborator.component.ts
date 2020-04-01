import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatTable
} from '@angular/material';

import { BirthdayAddService } from '../../services/birthday.service';
import { map } from 'rxjs/operators';
import { Collaborators } from '../../models/collaborator';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-collaborator',
  templateUrl: './list-collaborator.component.html',
  styleUrls: ['./list-collaborator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListCollaboratorComponent implements OnInit {
  columns: string[] = ['firstName', 'lastName', 'birthdayDate', 'remove'];
  dataSource: MatTableDataSource<Collaborators>;
  ELEMENT_DATA: Collaborators[] = [];
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  errorMessage: string;
  moment: any = moment;

  constructor(
    private birthdayService: BirthdayAddService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.getCustomersList();
  }

  getCustomersList() {
    this.birthdayService
      .getCustomersList()
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe(data => {
        this.ELEMENT_DATA = data;
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA.slice());
        this.dataSource.paginator = this.paginator;
      });
  }

  removeAt(data: string) {
    this.birthdayService
      .deleteCustomer(data)
      .catch(err => (this.errorMessage = err));
  }

  reset() {
    this.dataSource.data = this.ELEMENT_DATA.slice();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  return() {
    this.router.navigate(['/']);
  }
}
