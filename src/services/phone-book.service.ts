import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {HttpClient, HttpResponse} from '@angular/common/http';
import {PhoneBook} from '../app/dashboard/phone-book.interface';

@Injectable()
export class PhoneBookService {

  constructor(private http: HttpClient) {
    // no op
  }

  findPhoneBooks(): Observable<PhoneBook[]> {
    return  this.http.get(environment.endpoint + '/contact-datas.json').map(res => <PhoneBook[]>res);
  }

  findPhoneBookById(id: string): Observable<PhoneBook> {
    return this.http.get(environment.endpoint + '/contact-data.json').map(res => <PhoneBook>res);
  }
}
