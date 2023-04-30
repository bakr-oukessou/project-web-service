import {Component, OnInit} from '@angular/core';
import {ClassroomService} from "../../services/classroom.service";
import {ClassroomDto} from "../../dto/ClassroomDto";

@Component({
  selector: 'app-join-classroom',
  templateUrl: './join-classroom.component.html',
  styleUrls: ['./join-classroom.component.css']
})
export class JoinClassroomComponent implements OnInit {

  classrooms: ClassroomDto[] = [];

  constructor(private classroomService: ClassroomService) {
  }

  ngOnInit(): void {
    this.classroomService.getInvites().subscribe(classrooms => this.classrooms = classrooms);
  }

  joinClassroom(id: number) {
    this.classroomService.join(id).subscribe();
  }
}
