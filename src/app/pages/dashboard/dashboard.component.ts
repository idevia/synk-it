
import { Component, ViewChild,OnInit,HostListener,Output,EventEmitter} from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  // @Input() message:string;
  // public sidenav:string;
  public visible: boolean = true ;

    @ViewChild('side') side: MatSidenavModule;
  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 800) {
      this.side.close('side');//close undefined
    }
    if  (event.target.innerWidth > 800) {
      this.side.open('side');//open undefined
    }
  }
}
