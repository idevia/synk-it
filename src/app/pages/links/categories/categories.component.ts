import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource } from '@angular/material';

import { DialognameComponent } from './../categories/dialogname/dialogname.component';

export interface PeriodicElement {
  name: string;
  sno: number;
  
  created: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { sno: 1, name: 'Hydrogen', created: 'Uncategorized', action: '' },
  { sno: 2, name: 'Helium',  created: 'Uncategorized', action: '' },
  { sno: 3, name: 'Lithium', created: 'Uncategorized', action: '' },
  { sno: 4, name: 'Beryllium',  created: 'Uncategorized', action: '' },

];
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
 
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['sno', 'name', 'created', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private dialog:MatDialog) { }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  onCreate() {
   this.dialog.open(DialognameComponent);
  }

}
