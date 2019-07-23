import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShopTabsComponent } from './my-shop-tabs.component';

describe('MyShopTabsComponent', () => {
  let component: MyShopTabsComponent;
  let fixture: ComponentFixture<MyShopTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyShopTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyShopTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
