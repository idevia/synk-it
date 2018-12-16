import { Component, OnInit,Output,Input,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // public hideMe:boolean;
  public visible: boolean = true;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  // @Output() sideEvent: EventEmitter<any> =new EventEmitter();
  // public sidenav ='sending message from nav component';
  constructor() { }

  ngOnInit() {

  }

  toogleSidenav(){
    // this.open.emit(this.sideEvent);

      this.visible = !this.visible;
      if (this.visible) {
        this.open.emit(null);//open undefinde
      } else {
        this.close.emit(null);
      }
    
  }
  
}
