import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-hidder',
  templateUrl: './header-hidder.page.html',
  styleUrls: ['./header-hidder.page.scss'],
})
export class HeaderHidderPage implements OnInit {

  arr = [];

  constructor(
    private navCtr: NavController
  ) { }

  ngOnInit() {
    for (let val = 0; val < 100 ; val++){
      this.arr.push(`Elemento - ${val}`);
    }    
  }

  /**
   * Volta para a página anterior
   * author Silvio Watakabe <silvio@tcmed.com.br>
   * @since 19-08-2020
   * @version 1.0
   */
  backPage() {
    this.navCtr.back();
  }    

}
