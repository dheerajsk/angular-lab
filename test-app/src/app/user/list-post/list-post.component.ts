import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostModel } from './post.model';

@Component({
  selector: 'list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  posts: PostModel[];

  constructor(private postService: PostService) {
    this.posts = [];
  }

  ngOnInit(): void {
    this.postService.getPostAsync().subscribe(
      (result) => {
        this.posts = result;
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("Completed");
      }
    );
  }

}
