import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotecateoriesComponent } from './notecateories.component';

describe('NotecateoriesComponent', () => {
  let component: NotecateoriesComponent;
  let fixture: ComponentFixture<NotecateoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotecateoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotecateoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
