import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { DialoglinksComponent } from './dialoglinks/dialoglinks.component';

export interface PeriodicElement {
  name: string;
  sno: number;
  link: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { sno: 1, name: 'Hydrogen', link:'a', action: '' },
  { sno: 2, name: 'Helium', link: 'a', action: '' },
  { sno: 3, name: 'Lithium', link: 'a', action: '' },
  { sno: 4, name: 'Beryllium', link: 'a', action: '' },
 
];


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  displayedColumns: string[] = ['sno', 'name', 'link', 'action'];
  dataSource = ELEMENT_DATA;
  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
onCreate(){
  this.dialog.open(DialoglinksComponent);
}
}
