import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarNavigationComponent } from './toolbar-navigation.component';

describe('ToolbarNavigationComponent', () => {
  let component: ToolbarNavigationComponent;
  let fixture: ComponentFixture<ToolbarNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
