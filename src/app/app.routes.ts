import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardPage} from './dashboard/dashboard.page';
import {MainLayout} from './main/main.layout';
import {AssetDetailPage} from './dashboard/asset-detail.page';
import {TestPage} from './dashboard/test.page';
import {PhoneBookDetailPage} from './dashboard/phone-book-detail.page';
import {PostPage} from './dashboard/post.page';
import {PostDetailsPage} from './dashboard/post-details.page';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardPage,
      },
      {
        path: 'detail/:assetNo',
        component: AssetDetailPage,
      },
      {
        path: 'test',
        component: TestPage,
      },

      {
        path: 'testdetails/:testID',
        component:PhoneBookDetailPage,
      },

      {
        path : 'posts',
        component : PostPage,

      },
      {
        path :'postdetails/:postID',
        component : PostDetailsPage,

      }

    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false}),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
