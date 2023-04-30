import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../../services/users.service";
import {UserDto} from "../../../dto/UserDto";

@Component({
  selector: 'app-classroom-users',
  templateUrl: './classroom-users.component.html',
  styleUrls: ['./classroom-users.component.css']
})
export class ClassroomUsersComponent implements OnInit {

  id: number = 0;

  users: UserDto[] = [];

  constructor(private usersService: UsersService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.usersService.getUsersOfClassroom(this.id).subscribe(users => this.users = users);
  }

}
