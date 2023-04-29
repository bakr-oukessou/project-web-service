import { Component } from '@angular/core';

@Component({
  selector: 'app-class-post',
  templateUrl: './class-post.component.html',
  styleUrls: ['./class-post.component.css']
})
export class ClassPostComponent {
  postText: string = '';
  posts: any[] = [];
  file: File | undefined;
  
  handlePostSubmit() {
    const newPost = { content: this.postText };
    this.posts.push(newPost);
    this.postText = "";
  }
  
  onFileSelected(event: any) {
    // Get the selected file and store it in the component
    this.file = event.target.files[0];
  }
}
