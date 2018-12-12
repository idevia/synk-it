import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource } from '@angular/material';

import { CategorydialogComponent } from '../../notes/notecateories/categorydialog/categorydialog.component';
export interface PeriodicElement {
  name: string;
  sno: number;
  created: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { sno: 1, name: 'Hydrogen', created: 'Uncategorized', action: '' },
  { sno: 2, name: 'Helium',created: 'Uncategorized', action: '' },
  { sno: 3, name: 'Lithium', created: 'Uncategorized', action: '' },
  { sno: 4, name: 'Beryllium', created: 'Uncategorized', action: '' },

];
@Component({
  selector: 'app-notecateories',
  templateUrl: './notecateories.component.html',
  styleUrls: ['./notecateories.component.scss']
})
export class NotecateoriesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['sno', 'name', 'created', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // dataSource = ELEMENT_DATA;
  constructor(private dialog: MatDialog) { }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  onCreate() {
    this.dialog.open(CategorydialogComponent);
  }
}
