import {Component} from '@angular/core';
import {ClassroomService} from "../../../services/classroom.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-invite-user',
  templateUrl: './invite-user.component.html',
  styleUrls: ['./invite-user.component.css']
})
export class InviteUserComponent {

  email: string = "";
  private classroomId: number = -1;

  constructor(private classroomService: ClassroomService, private route: ActivatedRoute) {
  }

  invite() {
    this.classroomId = this.route.snapshot.params['id'];
    this.classroomService.invite({classroomId: this.classroomId, userEmail: this.email}).subscribe();
  }
}
