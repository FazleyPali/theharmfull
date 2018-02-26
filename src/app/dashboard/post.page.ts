import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PhoneBookService} from '../../services/phone-book.service';
import {Observable} from 'rxjs/Observable';
import {Post} from './post.interface';
import {PostService} from '../../services/post.service';

@Component({
    selector: 'qs-post',
    templateUrl: './post.page.html'
  })


export class PostPage implements OnInit, OnDestroy{

  postData$: Observable<Post[]>;

  constructor(private postservice: PostService,
              private router: Router,
              private route: ActivatedRoute){

  }


  loadPosts(): void {
    this.postData$ = this.postservice.findPosts();
  }

  viewPost(postdata: Post): void {
    console.log(JSON.stringify(postdata));
   this.router.navigate(['/postdetails',postdata.id]);
  }

  ngOnInit(): void {
    console.log('init');
    this.loadPosts();
  }

  ngOnDestroy(): void {
  }
}


