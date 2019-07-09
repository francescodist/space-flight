import {Component, OnInit} from '@angular/core';
import {Assignment, AstronautsService, LaunchHistory} from '../../services/astronauts/astronauts.service';

@Component({
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.scss']
})
export class LaunchPageComponent implements OnInit {

  constructor(private astronautService: AstronautsService) {
  }

  ngOnInit() {
    this.launch();
  }

  getAssignments(): Assignment[] {
    return this.astronautService.getAssignments();
  }

  replaceAssignments(assignments: Array<Assignment>) {
    this.astronautService.replaceAssignments(assignments);
  }

  getLaunchHistory(): LaunchHistory {
    return this.astronautService.getLaunchHistory();
  }

  launch() {
    this.astronautService.generateAssignments();
  }

}
