import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopMobelsMyshopComponent } from './pop-mobels-myshop.component';

describe('PopMobelsMyshopComponent', () => {
  let component: PopMobelsMyshopComponent;
  let fixture: ComponentFixture<PopMobelsMyshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopMobelsMyshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopMobelsMyshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
