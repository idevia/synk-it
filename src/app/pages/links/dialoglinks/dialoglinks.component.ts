import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialoglinks',
  templateUrl: './dialoglinks.component.html',
  styleUrls: ['./dialoglinks.component.scss']
})
export class DialoglinksComponent implements OnInit {
  dialogLinksForm: FormGroup;
  constructor(private fb:FormBuilder) { }

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

}
