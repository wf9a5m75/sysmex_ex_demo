import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: '',
    redirectTo: 'beyond-a-better-box',
    pathMatch: 'full'
  },
  {
    path: 'beyond-a-better-box',
    loadChildren: () => import('./beyond-a-better-box/beyond-a-better-box.module').then( m => m.BeyondABetterBoxPageModule)
  },
  {
    path: 'product-overview',
    loadChildren: () => import('./product-overview/product-overview.module').then( m => m.ProductOverviewPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
