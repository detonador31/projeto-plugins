import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Camera1PageRoutingModule } from './camera1-routing.module';

import { Camera1Page } from './camera1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Camera1PageRoutingModule
  ],
  declarations: [Camera1Page]
})
export class Camera1PageModule {}
