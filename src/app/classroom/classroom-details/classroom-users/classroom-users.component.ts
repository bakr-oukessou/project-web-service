import {Component, OnInit} from '@angular/core';
import {ClassroomService} from "../../../services/classroom.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-classroom-users',
  templateUrl: './classroom-users.component.html',
  styleUrls: ['./classroom-users.component.css']
})
export class ClassroomUsersComponent implements OnInit {

  id: string | null = "";

  constructor(private classroomService: ClassroomService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
