import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit,
  ViewContainerRef
} from '@angular/core';
import {Asset} from './asset.interface';
import {Observable} from 'rxjs/Observable';
import {AssetService} from '../../services/asset.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar} from '@angular/material';
import {AssetCreatorDialog} from './asset-creator.dialog';
import {PhoneBookService} from '../../services/phone-book.service';
import {PhoneBook} from './phone-book.interface';
import {TestDialog} from './test.dialog';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit, OnDestroy {


  assets$: Observable<Asset[]>;
  phoneBooks$: Observable<PhoneBook[]>;
  creatorDialogRef: MatDialogRef<AssetCreatorDialog>;
  testingDialogRef : MatDialogRef<TestDialog>;

  // constructor
  constructor(private assetService: AssetService,
              private phoneBookService: PhoneBookService,
              private router: Router,
              private route: ActivatedRoute,
              private vcf: ViewContainerRef,
              private dialog: MatDialog,
              private snackBar : MatSnackBar ) {
    console.log('constructor');
  }


  loadPosts(): void {
    this.assets$ = this.assetService.findAssets();
    this.phoneBooks$ = this.phoneBookService.findPhoneBooks();
  }

  viewAsset(asset: PhoneBook): void {
    console.log(JSON.stringify(asset));
    this.router.navigate(['/testdetails', asset.id]);
  }

  ngOnInit(): void {
    console.log('init');
    this.loadPosts();
  }

  ngOnDestroy(): void {
    // no op
  }

  showAddDialog(): void {
    console.log('showContainerDialog');
    let config: MatDialogConfig = new MatDialogConfig();
    config.viewContainerRef = this.vcf;
    config.role = 'dialog';
    config.width = '70%';
    config.height = '60%';
    config.position = {top: '0px'};
    this.creatorDialogRef = this.dialog.open(AssetCreatorDialog, config);
    this.creatorDialogRef.afterClosed().subscribe((res) => {
      this.loadSnackBar();
      console.log('close dialog');

    });
  }
  loadSnackBar():void{
    console.log('Snack Bar  loaded')
    this.snackBar.open('I am loaded','',{duration : 5000})
  }

  testDialog():void{
    console.log('showContainerDialog for testing');
    let config : MatDialogConfig = new MatDialogConfig();
    config.viewContainerRef = this.vcf;
    config.role = 'dialog';
    config.role = 'dialog';
    config.width = '100%';
    config.height = '60%';
    config.position = {top: '0px'};
    this.testingDialogRef = this.dialog.open(TestDialog, config);
    this.testingDialogRef.afterClosed().subscribe((res) => {
      this.loadSnackBar();
      console.log('close dialog');
    });

  }
}
