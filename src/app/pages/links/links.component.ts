import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource } from '@angular/material';

import { DialoglinksComponent } from './dialoglinks/dialoglinks.component';

export interface PeriodicElement {
  name: string;
  sno: number;
  link: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { sno: 1, name: 'Hydrogen', link: 'https://facebook.com', action: '' },
  { sno: 2, name: 'Helium', link: 'https://google.com', action: '' },
  { sno: 3, name: 'Lithium', link: 'https://facebook.com', action: '' },
  { sno: 4, name: 'Beryllium', link: 'https://facebook.com', action: '' },

];


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['sno', 'name', 'link', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // dataSource = ELEMENT_DATA;
  constructor(private dialog: MatDialog) { }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

onCreate() {
  this.dialog.open(DialoglinksComponent);
}
}
