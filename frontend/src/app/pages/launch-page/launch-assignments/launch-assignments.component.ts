import {Component, Input, OnInit} from '@angular/core';
import {Assignment} from '../../../services/astronauts/astronauts.service';
import {Astronaut} from '../../../models/Astronaut';

@Component({
  selector: 'app-launch-assignments',
  templateUrl: './launch-assignments.component.html',
  styleUrls: ['./launch-assignments.component.scss']
})
export class LaunchAssignmentsComponent implements OnInit {

  @Input() assignments: Array<Assignment>;

  constructor() {
  }

  ngOnInit() {
  }

  isDog(astronaut: Astronaut): boolean {
    return astronaut.name.last.length === 0;
  }

}
