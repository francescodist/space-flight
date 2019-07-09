import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchAssignmentsComponent } from './launch-assignments.component';

describe('LaunchAssignmentsComponent', () => {
  let component: LaunchAssignmentsComponent;
  let fixture: ComponentFixture<LaunchAssignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchAssignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
