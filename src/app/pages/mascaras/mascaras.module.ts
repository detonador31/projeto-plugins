import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MascarasPageRoutingModule } from './mascaras-routing.module';

import { MascarasPage } from './mascaras.page';

import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MascarasPageRoutingModule,
    NgxMaskModule,
  ],
  declarations: [MascarasPage],
})
export class MascarasPageModule {}
