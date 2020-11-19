import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.page.html',
  styleUrls: ['./charts.page.scss'],
})
export class ChartsPage implements OnInit {
  // tslint:disable: no-string-literal
  tipoChart: any = [
    {
        tipo: 'bar',
        descri  : 'Barras',
    },
    {
        tipo: 'pie',
        descri  : 'Torta',
    },
    {
        tipo: 'line',
        descri  : 'Linhas',
    },
    {
        tipo: 'radar',
        descri  : 'Radar',
    },
    {
        tipo: 'doughnut',
        descri  : 'Doughnut',
    },
    {
        tipo: 'polarArea',
        descri  : 'Area Polar',
    },
    {
        tipo: 'bubble',
        descri  : 'Bolhas',
    },
    {
        tipo: 'scatter',
        descri  : 'Linhas Básicas',
    },
  ];


  // Options
  chart2Options = {
    responsive: true,
    title: {
      display: true,
      text: 'Vendas Mês a mês'
    },
    pan: {
      enabled: true,
      mode: 'xy'
    },
    zoom: {
      enabled: true,
      mode: 'xy'
    }
  };

  chart2Colors: Color[] = [
    {
      borderColor: '#000000',
      backgroundColor: '#ff00ff'
    }
  ];

  // Data
  chart2Data: ChartDataSets[] = [{ data: [], label: 'Stock price' }];
  chart2Labels: Label[];

  chart2Type = 'pie';


  // Data
  chartData: ChartDataSets[] = [{ data: [], label: 'Stock price' }];
  chartLabels: Label[];

  // Options
  chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Historic Stock price'
    },
    pan: {
      enabled: true,
      mode: 'xy'
    },
    zoom: {
      enabled: true,
      mode: 'xy'
    }
  };
  chartColors: Color[] = [
    {
      borderColor: '#000000',
      backgroundColor: '#ff00ff'
    }
  ];
  chartType = 'line';
  showLegend = true;

  // For search
  stock = 'AAPL';

  constructor(
    private http: HttpClient,
    private navCtr: NavController
    ) {
    }

  async ngOnInit() {
    await this.carregaChart2();
    // this.getData(this.stock);
  }


  getData(stock: string) {
    const url = 'https://financialmodelingprep.com/api/v3/historical-price-full/' + stock +
    '?from=2018-03-12&to=2019-03-12&apikey=demo';
    this.http.get(url).subscribe(res => {
      const history = res['historical'];
      console.log('res', res);
      this.chartLabels = [];
      this.chartData[0].data = [];

      for (const entry of history) {
        this.chartLabels.push(entry.date);
        this.chartData[0].data.push(entry['close']);
      }
    });
  }

  async carregaChart2() {

    this.chart2Labels = [];
    this.chart2Data[0].data = [];

    this.chart2Labels  = ['January', 'February', 'March', 'April'];
    this.chart2Data[0].data = [50, 35, 30, 40];
  }

  typeChanged(e) {
    const on = e.detail.checked;
    this.chartType = on ? 'line' : 'bar';
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
