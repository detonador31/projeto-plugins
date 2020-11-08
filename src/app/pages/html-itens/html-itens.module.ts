import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlItensPageRoutingModule } from './html-itens-routing.module';

import { HtmlItensPage } from './html-itens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlItensPageRoutingModule
  ],
  declarations: [HtmlItensPage]
})
export class HtmlItensPageModule {}
