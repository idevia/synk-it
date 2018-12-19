
import { Component, ViewChild, OnInit, HostListener} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // @Input() message:string;
  // public sidenav:string;
  public visible: Boolean = true;

  @ViewChild('side') side: MatSidenav;
  constructor() { }

  ngOnInit() {
  }

  

  onToggleSide(shouldOpen) {
    if (shouldOpen) {
      this.side.open();
    } else {
      this.side.close();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 800) {
      this.side.close(); 
    }
    if  (event.target.innerWidth > 800) {
      this.side.open(); 
    }
  }

}
