import { Component, OnInit } from '@angular/core';
import {Assignment, AstronautsService} from '../../services/astronauts/astronauts.service';

@Component({
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.scss']
})
export class LaunchPageComponent implements OnInit {

  constructor(private astronautService: AstronautsService) { }

  ngOnInit() {
    this.astronautService.generateAssignments();
  }

  getAssignments(): Assignment[] {
    return this.astronautService.getAssignments();
  }

}
