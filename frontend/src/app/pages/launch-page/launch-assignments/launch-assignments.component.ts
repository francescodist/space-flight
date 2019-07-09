import {Component, Input, OnInit} from '@angular/core';
import {Assignment} from "../../../services/astronauts/astronauts.service";

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

}
