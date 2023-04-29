import {Component} from '@angular/core';
import {ClassroomService} from "../../services/classroom.service";

@Component({
  selector: 'app-classroom-details',
  templateUrl: './classroom-details.component.html',
  styleUrls: ['./classroom-details.component.css']
})
export class ClassroomDetailsComponent {


  constructor(private classroomService: ClassroomService) {
  }


}
