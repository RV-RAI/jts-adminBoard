import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaffEmployeeModelComponent } from './add-staff-employee-model.component';

describe('AddStaffEmployeeModelComponent', () => {
  let component: AddStaffEmployeeModelComponent;
  let fixture: ComponentFixture<AddStaffEmployeeModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStaffEmployeeModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStaffEmployeeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
