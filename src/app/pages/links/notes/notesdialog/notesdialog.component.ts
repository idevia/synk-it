import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-notesdialog',
  templateUrl: './notesdialog.component.html',
  styleUrls: ['./notesdialog.component.scss']
})
export class NotesdialogComponent implements OnInit {

  dialogLinksForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dialogLinksForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      textarea: ['', [
        Validators.required,

      ]],
    });
  }
  get name() {
    return this.dialogLinksForm.get("name");
  }
  get textarea() {
    return this.dialogLinksForm.get("textarea");
  }
}
