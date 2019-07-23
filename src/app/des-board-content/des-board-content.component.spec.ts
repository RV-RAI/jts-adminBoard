import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesBoardContentComponent } from './des-board-content.component';

describe('DesBoardContentComponent', () => {
  let component: DesBoardContentComponent;
  let fixture: ComponentFixture<DesBoardContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesBoardContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesBoardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
