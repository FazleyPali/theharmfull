import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {MainLayout} from './main/main.layout';
import {AssetService} from '../services/asset.service';
import {AssetDetailPage} from './dashboard/asset-detail.page';
import {DashboardPage} from './dashboard/dashboard.page';
import {AssetCreatorDialog} from './dashboard/asset-creator.dialog';
import {PhoneBookService} from '../services/phone-book.service';
import {TestPage} from './dashboard/test.page';
import {FormsModule} from '@angular/forms';
import {PhoneBookDetailPage} from './dashboard/phone-book-detail.page';
import {PostPage} from './dashboard/post.page';
import {PostService} from '../services/post.service';
import {PostDetailsPage} from './dashboard/post-details.page';
import {MatDialogModule} from '@angular/material';
import {TestDialog} from './dashboard/test.dialog';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    AssetDetailPage,
    AssetCreatorDialog,
    MainLayout,
    TestPage,
    PhoneBookDetailPage,
    PostPage,
    PostDetailsPage,
    TestDialog
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AssetService,PhoneBookService,PostService],
  entryComponents: [AssetCreatorDialog,TestDialog],
  bootstrap: [AppComponent],
})
export class AppModule {
}
