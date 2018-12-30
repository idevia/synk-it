import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-categorydialog',
  templateUrl: './categorydialog.component.html',
  styleUrls: ['./categorydialog.component.scss']
})
export class CategorydialogComponent implements OnInit {
noteCategories:FormGroup;
  constructor(private fb:FormBuilder) { 
  }

  ngOnInit() {
    this.noteCategories = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(4),
      ]],
    });
  }
  get name() {
    return this.noteCategories.get('name');
  }

}
