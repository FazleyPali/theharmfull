import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {PhoneBook} from './phone-book.interface';
import {PhoneBookService} from '../../services/phone-book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'qs-phonebookdetails',
  templateUrl:'./phone-book-details.page.html'

})

export class PhoneBookDetailPage implements OnInit, OnDestroy{
  id$: Observable<PhoneBook>;

  constructor(private phonebook: PhoneBookService,
              private router: Router,
              private route: ActivatedRoute){

  }

  loadAsset(testID : string): void{
    console.log('assetNo : ' + testID);
    this.id$ = this.phonebook.findPhoneBookById(testID);
  }


  ngOnInit(): void {
    this.route.params.subscribe(( params :{testID :string})=>{
      console.log('assetNo : ' + params.testID);
      this.id$ = this.phonebook.findPhoneBookById(params.testID);
    });

  }

  ngOnDestroy(): void {
  }

}
