import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderHidderPage } from './header-hidder.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderHidderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderHidderPageRoutingModule {}
