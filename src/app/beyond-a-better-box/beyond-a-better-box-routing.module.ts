import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeyondABetterBoxPage } from './beyond-a-better-box.page';

const routes: Routes = [
  {
    path: '',
    component: BeyondABetterBoxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeyondABetterBoxPageRoutingModule {}
