import {Component, OnInit} from '@angular/core';
import {ClassroomService} from "../services/classroom.service";
import {ClassroomDto} from "../dto/ClassroomDto";

@Component({
  selector: 'app-classes',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

  classrooms: ClassroomDto[] = [] as ClassroomDto[];

  constructor(private classroomService: ClassroomService) {
  }

  ngOnInit(): void {
    this.classroomService.getClassrooms().subscribe(res => this.classrooms = res);
  }

}
