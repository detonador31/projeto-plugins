import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Camera2Page } from './camera2.page';

const routes: Routes = [
  {
    path: '',
    component: Camera2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Camera2PageRoutingModule {}
