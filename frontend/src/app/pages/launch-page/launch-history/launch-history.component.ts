import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Assignment, LaunchHistory} from '../../../services/astronauts/astronauts.service';

@Component({
  selector: 'app-launch-history',
  templateUrl: './launch-history.component.html',
  styleUrls: ['./launch-history.component.scss']
})
export class LaunchHistoryComponent implements OnInit {

  @Input() launchHistory: LaunchHistory = [];

  @Output() replaceAssignments = new EventEmitter<Array<Assignment>>();

  constructor() {
  }

  ngOnInit() {
  }

  onLaunchClick(assignments: Array<Assignment>) {
    this.replaceAssignments.emit(assignments);
  }

}
