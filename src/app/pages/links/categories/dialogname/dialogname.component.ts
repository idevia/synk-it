import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dialogname',
  templateUrl: './dialogname.component.html',
  styleUrls: ['./dialogname.component.scss']
})
export class DialognameComponent implements OnInit {
// dialogForm:FormGroup;
// name:string;
  constructor(private fb:FormBuilder) { }
dialogForm = this.fb.group({
  name: ['', [
    Validators.required,
    Validators.minLength(4),
  ]],
 
});
  ngOnInit() {
    
  
  }
  get name() {
    return this.dialogForm.get('name');
  }

}
