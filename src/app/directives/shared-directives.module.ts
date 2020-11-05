import { FadeHeaderDirective } from './fade-header.directive';
import { HideHeaderDirective } from './hide-header.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ FadeHeaderDirective, HideHeaderDirective ],
  imports: [ CommonModule ],
  exports: [ FadeHeaderDirective, HideHeaderDirective ],
})
export class SharedDirectivesModule { }
