import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input()
  post?: Post;

  @Input() index:number = 0;

  constructor(private postService:PostService,private router:Router){
  
  }

  ngOnInit() {
    console.log(this.post);
    console.log(this.index);
  }

  onDelete()
  {
    console.log("OnDelete() function is called here");
    this.postService.deletePost(this.index);

    // this.postService.deletePost(0);
    // this.postService.deletePost(1);
    // this.postService.deletePost(2);

  }
  onEdit()
  {
    console.log("onEdit() is callled");
    this.router.navigate(["/post-edit",this.index]);
  }
  
  likePost()
  {
    console.log("LikePost is Called");
    this.postService.likePost(this.index)
  }


}


//Notes-? question marks specifies whether it can be Passed or not