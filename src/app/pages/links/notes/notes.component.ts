import { Component, OnInit,ViewChild} from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource } from '@angular/material';

import { NotesdialogComponent } from '../notes/notesdialog/notesdialog.component';


export interface PeriodicElement {
  all: string;
  sno: number;
  text: string;
  category: string;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { sno: 1, all: 'Hydrogen', text: 'textarea', category: 'Uncategorized', action: '' },
  { sno: 2, all: 'Helium', text: 'textarea', category: 'Uncategorized', action: '' },
  { sno: 3, all: 'Lithium', text: 'textarea', category: 'Uncategorized', action: '' },
  { sno: 4, all: 'Beryllium', text: 'textarea', category: 'Uncategorized', action: '' },

];
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['sno', 'all', 'text', 'category', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // dataSource = ELEMENT_DATA;
  constructor(private dialog: MatDialog) { }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  onCreate() {
    this.dialog.open(NotesdialogComponent);
  }
}
