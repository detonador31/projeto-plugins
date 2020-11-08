import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtmlItensPage } from './html-itens.page';

const routes: Routes = [
  {
    path: '',
    component: HtmlItensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlItensPageRoutingModule {}
