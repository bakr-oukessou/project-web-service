import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../../services/posts.service";
import {PostDto} from "../../../dto/PostDto";

@Component({
  selector: 'app-classroom-posts',
  templateUrl: './classroom-posts.component.html',
  styleUrls: ['./classroom-posts.component.css']
})
export class ClassroomPostsComponent implements OnInit {

  classroomId: number = 0;
  posts: PostDto[] = [];

  constructor(private postsService: PostsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.classroomId = this.route.snapshot.params['id'];
    this.postsService.getPosts(this.classroomId).subscribe(posts => this.posts = posts)
  }

  content: PostDto = {} as PostDto;

  post() {
    this.content.classroom_id = this.route.snapshot.params['id'];
    this.postsService.newPost(this.content).subscribe(post => this.posts.push(post));
  }
}
