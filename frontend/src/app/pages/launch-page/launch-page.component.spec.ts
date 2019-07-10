import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LaunchPageComponent} from './launch-page.component';
import {LaunchHistoryComponent} from './launch-history/launch-history.component';
import {LaunchAssignmentsComponent} from './launch-assignments/launch-assignments.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CrudService} from "../../services/crud/crud.service";
import {AstronautsService} from "../../services/astronauts/astronauts.service";
import createSpy = jasmine.createSpy;

describe('LaunchPageComponent', () => {
  let component: LaunchPageComponent;
  let fixture: ComponentFixture<LaunchPageComponent>;

  let mockAstronautService: AstronautsService;

  beforeEach(async(() => {
    mockAstronautService = {} as AstronautsService;
    mockAstronautService.generateAssignments = createSpy();
    mockAstronautService.getAssignments = createSpy().and.returnValue([]);
    mockAstronautService.getLaunchHistory = createSpy().and.returnValue([]);

    TestBed.configureTestingModule({
      declarations: [LaunchPageComponent, LaunchHistoryComponent, LaunchAssignmentsComponent],
      providers: [{provide: AstronautsService, useValue: mockAstronautService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
