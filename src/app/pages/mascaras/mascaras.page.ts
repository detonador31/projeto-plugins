import { HelperService } from './../../services/helper.service';
import { Mascara } from './../../classes/mascara';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe, PercentPipe } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

@Component({
  selector: 'app-mascaras',
  templateUrl: './mascaras.page.html',
  styleUrls: ['./mascaras.page.scss'],
})
export class MascarasPage implements OnInit {

  mascara: Mascara = new Mascara();
  numRegistros = 0;
  array: Mascara[] = [];

  constructor(
    private navCtr: NavController,
    private currency: CurrencyPipe,
    private datePipe: DatePipe,
    private percentPipe: PercentPipe,
    private mask: NgxMaskModule,
    private helper: HelperService
  ) {

  }

  ngOnInit() {
    this.mascara.real = '300000,00';
    this.mascara.percent = '6,99';
    const date = new Date();
    this.mascara.data = this.datePipe.transform( date, 'yyyy-MM-dd HH:mm');
    this.mascara.fixo = '(11) 5852-5574';
    this.mascara.celular = '(11) 95852-5574';
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
    masc2.sqliteDate = masc2.data;
    // Converte de string para numero float para salvar no banco
    masc2.real =  typeof masc2.real === 'string' ? this.helper.formataFloat(masc2.real) : masc2.real;
    // Converte de string para numero float porcentagem para salvar no banco
    masc2.percent = typeof masc2.percent === 'string' ? this.helper.convertDecimalPorcentagem(masc2.percent): masc2.percent;
    this.array.push(masc2);
    this.numRegistros = this.array.length;
  }


  async editData(item: Mascara) {
    this.mascara = null;
    this.mascara = Object.assign({}, item);
    // Converte de numero porcentagem para string Decimal para edição
    this.mascara.percent = this.helper.convertPorcentagemDecimal(this.mascara.percent, 2);
    // Converte de numero float para string Decimal para edição
    this.mascara.real = this.helper.numberToCurrency(this.mascara.real);

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
