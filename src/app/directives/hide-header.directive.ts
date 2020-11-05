import { Directive, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appHideHeader]'
})
export class HideHeaderDirective  implements OnInit {

  constructor(
    private renderer: Renderer2,
    private domCtrl: DomController
  ) { }
  @Input('appHideHeader') header: any;
  private toolbarHeight = 44;

  ngOnInit() {
    this.header = this.header.el;
    this.domCtrl.read(() =>{
      this.toolbarHeight = this.header.clientHeight;
    });
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event){
    const scrollTop = $event.detail.scrollTop;
    let newPosition =- (scrollTop / 5);

    if (newPosition < -this.toolbarHeight) {
      newPosition =- this.toolbarHeight;
    }

    let newOpacity = 1 - (newPosition / -this.toolbarHeight);

    this.domCtrl.write(() => {
      this.renderer.setStyle(this.header, 'top', `${newPosition}px`);
      this.renderer.setStyle(this.header, 'opacity', newOpacity);
    });
  }

}
