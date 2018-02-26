import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Post} from '../app/dashboard/post.interface';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) {
    // no op
  }

  findPosts(): Observable<Post[]> {
    return this.http.get('http://jsonplaceholder.typicode.com/posts/').map(res => <Post[]>res);
  }

  findPostById(id: number): Observable<Post> {
    return this.http.get('http://jsonplaceholder.typicode.com/posts/' + id).map(res => <Post>res);
  }
}
