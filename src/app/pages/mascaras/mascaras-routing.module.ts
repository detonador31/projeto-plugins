import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MascarasPage } from './mascaras.page';

const routes: Routes = [
  {
    path: '',
    component: MascarasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MascarasPageRoutingModule {}
