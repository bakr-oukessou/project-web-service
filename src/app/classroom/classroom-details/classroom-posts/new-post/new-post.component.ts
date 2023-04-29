import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../../../services/posts.service";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  content: string = "";

   constructor(private postsService: PostsService, private route: ActivatedRoute) {
  }

  post() {

  }
}
