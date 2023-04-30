import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";
import {ClassroomDto} from "../dto/ClassroomDto";
import {InviteDto} from "../dto/InviteDto";

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  findClassroomById(id: number) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + this.auth.getAuthToken()};
    return this.http.get<ClassroomDto>(environment.apiURL + '/classrooms/' + id, {headers});
  }

  getClassrooms() {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + this.auth.getAuthToken()};
    return this.http.get<ClassroomDto[]>(environment.apiURL + '/classrooms', {headers});
  }

  createClassroom(classroom: ClassroomDto) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + this.auth.getAuthToken()};
    return this.http.post<ClassroomDto>(environment.apiURL + '/classrooms', classroom, {headers});

  }

  invite(invite: InviteDto) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + this.auth.getAuthToken()};
    return this.http.post<ClassroomDto>(environment.apiURL + '/classrooms/invite', invite, {headers});

  }

  join(classroomId: number) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + this.auth.getAuthToken()};
    return this.http.post<ClassroomDto>(environment.apiURL + '/classrooms/join/' + classroomId, null, {headers});
  }

  getUserClassrooms(classroomId: number) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + this.auth.getAuthToken()};
    return this.http.get<ClassroomDto[]>(environment.apiURL + '/classrooms/' + classroomId, {headers});
  }

  getInvites() {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + this.auth.getAuthToken()};
    return this.http.get<ClassroomDto[]>(environment.apiURL + '/classrooms/invites', {headers});

  }
}
