import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Camera1Page } from './camera1.page';

const routes: Routes = [
  {
    path: '',
    component: Camera1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Camera1PageRoutingModule {}
