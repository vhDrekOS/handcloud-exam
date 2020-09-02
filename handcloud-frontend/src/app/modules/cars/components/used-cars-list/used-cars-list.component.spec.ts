import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedCarsListComponent } from './used-cars-list.component';

describe('UsedCarsListComponent', () => {
  let component: UsedCarsListComponent;
  let fixture: ComponentFixture<UsedCarsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsedCarsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedCarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
