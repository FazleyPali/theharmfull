import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Post} from './post.interface';

@Component({
  selector : 'qs-postdetails',
  templateUrl: './post-details.page.html'
})

export class PostDetailsPage implements OnInit, OnDestroy{

  postData$ : Observable<Post>;

  constructor(private postservice : PostService,
              private router: Router,
              private route: ActivatedRoute){

  }


  ngOnInit(): void {
    this.route.params.subscribe((params: {postID : number})=>{
    console.log('Post ID : '+params.postID);
    this.postData$ = this.postservice.findPostById(params.postID);
    });
  }

  ngOnDestroy(): void {
  }

}
