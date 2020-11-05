import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderHidderPageRoutingModule } from './header-hidder-routing.module';

import { HeaderHidderPage } from './header-hidder.page';

import { SharedDirectivesModule } from './../../directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderHidderPageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [HeaderHidderPage]
})
export class HeaderHidderPageModule {}
