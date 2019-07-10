import {async, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {AstronautsService} from './astronauts.service';
import {CrudService} from '../crud/crud.service';
import {Astronaut} from '../../models/Astronaut';
import createSpy = jasmine.createSpy;
import {of} from 'rxjs';
import Spy = jasmine.Spy;
import {StorageService} from '../storage/storage.service';

describe('AstronautsService', () => {
  let service: AstronautsService;
  let mockCrudService: CrudService<Astronaut>;
  let mockGetList: Spy;
  let mockStorageService: StorageService;

  beforeEach(() => {

    mockCrudService = {} as CrudService<Astronaut>;
    mockGetList = createSpy('getList').and.returnValue(of([1, 2, 3, 4]));
    mockCrudService.getList = mockGetList;

    mockStorageService = {} as StorageService;
    mockStorageService.read = createSpy().and.returnValue([]);
    mockStorageService.save = createSpy();

    TestBed.configureTestingModule({
      providers: [{provide: CrudService, useValue: mockCrudService}, {
        provide: StorageService,
        useValue: mockStorageService
      }]
    });

    service = TestBed.get(AstronautsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate assignments of astronauts', () => {
    expect(service.getAssignments().length).toBe(0);
    service.generateAssignments().add(() => {
      expect(service.getAssignments().length).toBe(4);
    });
  });

  it('should add generated assignments to history', () => {
    expect(service.getLaunchHistory().length).toBe(0);
    service.generateAssignments().add(() => {
      expect(service.getLaunchHistory().length).toBe(1);
    });
  });
});
