import { Mascara } from './../../classes/mascara';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-mascaras',
  templateUrl: './mascaras.page.html',
  styleUrls: ['./mascaras.page.scss'],
})
export class MascarasPage implements OnInit {

  mascara: Mascara = new Mascara();
  numRegistros = 0;
  public array = [];

  constructor(
    private navCtr: NavController,
    private currency: CurrencyPipe,
    private datePipe: DatePipe
  ) {

  }

  ngOnInit() {
    this.mascara.real = 300000;
    this.mascara.percent = 6.99;
    this.mascara.data = new Date();
    this.mascara.fixo = 1158525574;
    this.mascara.celular = 11958525574;
  }

  async save(mascara: Mascara) {
    // tslint:disable-next-line: deprecation
    if (mascara.real !== undefined) {
      await this.saveToArray(mascara);
    }
  }

  async saveToArray(mascara: Mascara) {
    // tslint:disable-next-line: deprecation

    const masc2 = Object.assign({}, mascara);
    masc2.sqliteDate = this.datePipe.transform( masc2.data, 'yyyy-mm-dd HH:mm');
    this.array.push(masc2);
    this.numRegistros = this.array.length;

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
