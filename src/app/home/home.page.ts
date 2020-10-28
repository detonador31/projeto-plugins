import { Router } from '@angular/router';
// Para armazenar Cookie no aplicativo
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // tslint:disable: no-string-literal

  constructor(
    public  router: Router,
  ) {}

  ngOnInit() {

  }

  /**
   * Fecha o app
   * author Silvio Watakabe <silvio@tcmed.com.br>
   * @since 04-09-2020
   * @version 1.0
   */
  fechaApp() {
    navigator['app'].exitApp();
  }

}
