import {Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {PhoneBook} from './phone-book.interface';
import {Observable} from 'rxjs/Observable';
import {PhoneBookService} from '../../services/phone-book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Asset} from './asset.interface';
@Component({
  selector: 'qs-test',
  templateUrl:'./test.page.html',})
export class TestPage implements OnInit, OnDestroy{
  phoneBooks$: Observable<PhoneBook[]>;




  constructor(private phoneBookService: PhoneBookService,
              private router: Router,
              private route: ActivatedRoute,
              private vcf: ViewContainerRef){

  }

  viewAsset(asset: Asset): void {
    console.log(JSON.stringify(asset));
    this.router.navigate(['/test', asset.assetNo]);
  }

  loadPosts(): void {

    this.phoneBooks$ = this.phoneBookService.findPhoneBooks();
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  ngOnDestroy(): void {
  }

}
