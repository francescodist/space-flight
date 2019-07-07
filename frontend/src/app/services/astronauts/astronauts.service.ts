import {Injectable} from '@angular/core';
import {Astronaut} from '../../models/Astronaut';
import {CrudService} from '../crud/crud.service';

export type Assignment = [Astronaut, Astronaut];

@Injectable({
  providedIn: 'root'
})
export class AstronautsService {

  private assignments: Assignment[];
  private url = 'astronauts';

  constructor(private crudService: CrudService<Astronaut>) {
  }

  generateAssignments() {
    this.crudService.getList(this.url).subscribe(astronauts => {
      astronauts.sort(() => Math.random() - 0.5);
      const astronautsToAssign: Astronaut[] = [...astronauts.slice(-1), ...astronauts.slice(0, -1)];
      this.assignments = astronauts
        .map((astronaut: Astronaut) => {
          return [astronaut, astronautsToAssign.shift()] as Assignment;
        }).sort(() => Math.random() - 0.5);
    });
  }

  getAssignments(): [Astronaut, Astronaut][] {
    return this.assignments;
  }


}
