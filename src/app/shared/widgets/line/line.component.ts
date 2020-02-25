import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { WeatherService } from '../../services/weather.service';
HC_exporting(Highcharts);

@Component({
  selector: 'app-widget-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  lat: number;
  lon: number;
  chartOptions: {};
  Highcharts = Highcharts;
  weatherData;
  timeAxis;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Aujourd\'hui'
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ]
      },
      yAxis: {
        title: {
          text: 'Temperature'
        },
        labels: {
          formatter() {
            return this.value + '°';
          }
        }
      },
      tooltip: {
        crosshairs: true,
        shared: true
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1
          }
        }
      },
      series: [
        {
          name: 'Tokyo',
          marker: {
            symbol: 'square'
          },
          data: [
            7.0,
            6.9,
            9.5,
            14.5,
            18.2,
            21.5,
            25.2,
            {
              y: 26.5,
              marker: {
                symbol:
                  'url(https://www.highcharts.com/samples/graphics/sun.png)'
              }
            },
            23.3,
            18.3,
            13.9,
            9.6
          ]
        },
        {
          name: 'London',
          marker: {
            symbol: 'diamond'
          },
          data: [
            {
              y: 3.9,
              marker: {
                symbol:
                  'url(https://www.highcharts.com/samples/graphics/snow.png)'
              }
            },
            4.2,
            5.7,
            8.5,
            11.9,
            15.2,
            17.0,
            16.6,
            14.2,
            10.3,
            6.6,
            4.8
          ]
        }
      ]
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
    this.lat = 43.5297;
    this.lon = 5.4474;
    this.getWeather();
  }

  getWeather() {
    this.weatherService
      .getForecastDatabyCoords(this.lat, this.lon)
      .subscribe(data => {
        this.timeAxis = '';
        this.weatherData = data;
      });
  }
}