import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoglinksComponent } from './dialoglinks.component';

describe('DialoglinksComponent', () => {
  let component: DialoglinksComponent;
  let fixture: ComponentFixture<DialoglinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialoglinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialoglinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
