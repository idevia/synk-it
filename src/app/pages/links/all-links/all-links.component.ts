import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatPaginator, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
// import { DataSource } from '@angular/cdk/collections';

import { DialoglinksComponent } from '../dialoglinks/dialoglinks.component';
import { LinkserviceService } from '../services/linkservice.service';
import { Bookmark} from './../services/modals/list';
// import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

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
  // lists: Issue[];
    @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['sno', 'name', 'link', 'category', 'action'];
  exampleDatabase: LinkserviceService | null;
  // dataSource: ExampleDataSource | null;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // dataSource = ELEMENT_DATA;
  constructor(private dialog: MatDialog, public httpClient: HttpClient, public dataService: LinkserviceService) { }
  ngOnInit() {
    // this.dataSource.paginator = this.paginator;



    // this.dataService.getLists()
    //   .subscribe(data => {
    //     this.lists = data;
    //   });
    // // this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  onCreate() {
    this.dialog.open(DialoglinksComponent);
  }
  


}