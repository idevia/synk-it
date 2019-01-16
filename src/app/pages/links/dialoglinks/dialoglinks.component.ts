import { LinkserviceService } from './../services/linkservice.service';
import { Component, OnInit ,Inject} from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { AllLinksComponent } from './../all-links/all-links.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Bookmark } from './../services/modals/list';

import { Router } from "@angular/router";
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-dialoglinks',
  templateUrl: './dialoglinks.component.html',
  styleUrls: ['./dialoglinks.component.scss']
})
export class DialoglinksComponent implements OnInit {
  dialogLinksForm: FormGroup;
  
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AllLinksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Bookmark[], public dataService: LinkserviceService) { }
 
  // dialogLinks: AngularFireList<any>;

  
  ngOnInit() {
     this.dialogLinksForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      link: ['', [
        Validators.required,
       
      ]],
    });
  }
get name(){
  return this.dialogLinksForm.get("name");
}
get link(){
  return this.dialogLinksForm.get("link");
}
// getDailogLink(){
//   this.dialogLinks = this.firebase.list('dialoglink');
//   return this.dialogLinks.snapshotChanges();
// }

// insertDialogLinks(dialoglink){
  // this.dialogLinks.push({
  //   // sno:dialoglink.sno,
  //   name:dialoglink.name,
  //   link:dialoglink.link,
  //   category:dialoglink.category
  // });

// } 
confirmAdd(){
  // this.dataService.getLists()
  // .subscribe(data => {
      
  //  this.dialogLinksForm.value(data);
  //   });
  
}
}
