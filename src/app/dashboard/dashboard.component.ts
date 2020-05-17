import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {
    this.chartOptions = {
          series: [
              {
                name: "High - 2013",
                data: [28, 29, 33, 36, 32, 32, 33]
              },
              {
                name: "Low - 2013",
                data: [12, 11, 14, 18, 17, 13, 13]
              }
          ],
          chart: {
            height: 350,
            type: "line"
          },
          colors: ['#003678', '#56a0f4'],
          title: {
            text: "My First Angular Chart"
          },
          xaxis: {
            categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
          }
        };
   }

  ngOnInit(): void {

  }

}
