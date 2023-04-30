import {Component} from '@angular/core';
import {ClassroomService} from "../../services/classroom.service";
import {ClassroomDto} from "../../dto/ClassroomDto";

@Component({
  selector: 'app-new-classroom',
  templateUrl: './new-classroom.component.html',
  styleUrls: ['./new-classroom.component.css']
})
export class NewClassroomComponent {

  classroom: ClassroomDto = {} as ClassroomDto;

  constructor(private classroomService: ClassroomService) {
  }


  createClassroom() {
    this.classroomService.createClassroom(this.classroom).subscribe();
  }

}
