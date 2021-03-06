import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource } from '@angular/material';

import { DialoglinksComponent } from '../dialoglinks/dialoglinks.component';

export interface PeriodicElement {
  name: string;
  sno: number;
  link: string;
  category: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { sno: 1, name: 'Hydrogen', link: 'https://facebook.com', category: 'Uncategorized', action: '' },
  { sno: 2, name: 'Helium', link: 'https://google.com', category: 'Uncategorized', action: '' },
  { sno: 3, name: 'Lithium', link: 'https://facebook.com', category: 'Uncategorized', action: '' },
  { sno: 4, name: 'Beryllium', link: 'https://facebook.com', category: 'Uncategorized', action: '' },

];

@Component({
  selector: 'app-all-links',
  templateUrl: './all-links.component.html',
  styleUrls: ['./all-links.component.scss']
})
export class AllLinksComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['sno', 'name', 'link', 'category', 'action'];
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
