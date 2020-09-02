import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedCarsManagmentComponent } from './used-cars-managment.component';

describe('UsedCarsManagmentComponent', () => {
  let component: UsedCarsManagmentComponent;
  let fixture: ComponentFixture<UsedCarsManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsedCarsManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedCarsManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
