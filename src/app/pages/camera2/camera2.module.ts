import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Camera2PageRoutingModule } from './camera2-routing.module';

import { Camera2Page } from './camera2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Camera2PageRoutingModule
  ],
  declarations: [Camera2Page]
})
export class Camera2PageModule {}
