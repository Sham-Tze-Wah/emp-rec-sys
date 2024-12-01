import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubEmployeeListComponent } from './sub-employee-list.component';

describe('SubEmployeeListComponent', () => {
  let component: SubEmployeeListComponent;
  let fixture: ComponentFixture<SubEmployeeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubEmployeeListComponent]
    });
    fixture = TestBed.createComponent(SubEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
