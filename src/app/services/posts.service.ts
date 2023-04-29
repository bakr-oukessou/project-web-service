import {Injectable} from '@angular/core';
import {PostDto} from "../dto/PostDto";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient, private auth: AuthService) {

  }
  newPost(content: PostDto) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + this.auth.getAuthToken()};
    return this.http.post<PostDto>(environment.apiURL, content, {headers});
  }
}
