import {Injectable} from '@angular/core';
import {Astronaut} from '../../models/Astronaut';
import {CrudService} from '../crud/crud.service';
import {StorageService} from '../storage/storage.service';

export type Assignment = [Astronaut, Astronaut];
export type LaunchHistory = Array<{ date: number; assignments: Array<Assignment> }>;

@Injectable({
  providedIn: 'root'
})
export class AstronautsService {

  private assignments: Array<Assignment> = [];
  private launchHistory: LaunchHistory = [];
  private url = 'astronauts';

  constructor(private crudService: CrudService<Astronaut>, private storage: StorageService) {
    this.launchHistory = this.storage.read('launch-history') || [];
  }

  generateAssignments() {
    this.crudService.getList(this.url).subscribe(astronauts => {
      astronauts.sort(() => Math.random() - 0.5);
      const astronautsToAssign: Astronaut[] = [...astronauts.slice(-1), ...astronauts.slice(0, -1)];
      this.assignments = astronauts
        .map((astronaut: Astronaut) => {
          return [astronaut, astronautsToAssign.shift()] as Assignment;
        }).sort(() => Math.random() - 0.5);
      this.launchHistory = [{assignments: this.assignments, date: Date.now()}, ...this.launchHistory];
      this.storage.save('launch-history', this.launchHistory);
    });
  }

  getAssignments(): Array<Assignment> {
    return this.assignments;
  }

  replaceAssignments(assignments: Array<Assignment>) {
    this.assignments = assignments;
  }

  getLaunchHistory(): LaunchHistory {
    return this.launchHistory;
  }

}
