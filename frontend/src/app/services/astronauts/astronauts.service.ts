import {Injectable} from '@angular/core';
import {Astronaut} from '../../models/Astronaut';
import {CrudService} from '../crud/crud.service';

@Injectable({
  providedIn: 'root'
})
export class AstronautsService {

  private astronauts: Astronaut[];
  private url = 'astronauts';

  constructor(private crudService: CrudService<Astronaut>) {
  }

  fetchList() {
    this.crudService.getList(this.url).subscribe(astronauts => {
      this.astronauts = astronauts;
    });
  }

  getList(): Astronaut[] {
    return this.astronauts;
  }
}
