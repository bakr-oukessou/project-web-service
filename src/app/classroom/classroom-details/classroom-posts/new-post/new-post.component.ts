import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../../../services/posts.service";
import {PostDto} from "../../../../dto/PostDto";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  content: PostDto = {} as PostDto;

  constructor(private postsService: PostsService, private route: ActivatedRoute) {
  }

  post() {
    this.content.classroom = this.route.snapshot.params['id'];
    this.postsService.post(this.content);
  }
}
