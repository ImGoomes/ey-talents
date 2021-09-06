import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoading = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;

    }, 5000);
  }

  optionsChart: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Orçado', 'Realizado']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
      }
    ],
    yAxis: [
      {
        type: 'value',
        boundaryGap: [0, '100%'],
      }
    ],
    series: [
      {
        name: 'Orçado',
        type: 'line',
        stack: 'counts',
        color: '#9FA2B4',
        // areaStyle: { normal: {} },
        data: [120, 132, 101, 134, 90, 230, 210, 110, 170, 80, 150, 160]
      },
      {
        name: 'Realizado',
        type: 'line',
        stack: 'counts',
        color: '#FFDB00',
        // areaStyle: { normal: {} },
        data: [220, 182, 191, 234, 290, 330, 310, 270, 290, 320, 210, 280 ]
      }
    ]
  };

}
