import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialognameComponent } from './dialogname.component';

describe('DialognameComponent', () => {
  let component: DialognameComponent;
  let fixture: ComponentFixture<DialognameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialognameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialognameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
