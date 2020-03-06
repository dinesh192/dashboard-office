import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { WeatherService } from '../../services/weather.service';
HC_exporting(Highcharts);
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';

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
  hours = ['0'];
  temperature = [0];

  constructor(
    private weatherService: WeatherService,
    private spinnersLine: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getLocation();
    this.chartOptions = {
      chart: {
        type: 'spline',
        backgroundColor: null,
        height: 170,
        color: 'white',
        events: {
          load() {
            const chart = this;
            const tmpMaxMin = chart.yAxis[0].getExtremes();
            chart.yAxis[0].setExtremes(tmpMaxMin.dataMin, tmpMaxMin.dataMax);
          }
        }
      },
      colors: ['#FAD519'],
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      accessibility: {
        description: 'charts'
      },
      legend: {
        enabled: false
      },
      xAxis: {
        min: 0.8,
        max: 4,
        tickInterval: 1,
        maxPadding: 0,
        endOnTick: false,
        startOnTick: false,
        type: 'datetime',
        categories: this.hours,
        labels: {
          style: {
            color: '#ffffff'
          },
          formatter() {
            return this.value + 'h';
          }
        }
      },
      yAxis: {
        // title: {
        //   text: '',
        //   style: {
        //     color: '#ffffff'
        //   }
        // },
        // labels: {
        //   style: {
        //     color: '#ffffff'
        //   },
        //   formatter() {
        //     return this.value + '°';
        //   }
        // }
        visible: false
      },
      plotOptions: {
        series: {
          pointPlacement: 'on',
          dataLabels: {
            enabled: true,
            formatter() {
              return this.y + '°';
            },
            style: {
              color: '#ffffff'
            }
          }
        }
      },
      tooltip: {
        animation: true,
        backgroundColor: '#0B132B',
        borderColor: '#0B132B',
        borderRadius: 20,
        style: {
          color: '#ffffff'
        },
        formatter() {
          return `À ${this.x}h votre température avoisinera ${this.y}° C.`;
        },
        crosshairs: false,
        shared: false
      },
      series: [
        {
          name: '',
          marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors['#FAD519'],
            fillColor: '#FAD519',
            radiusColor: '#ffffff',
            color: '#ffffff'
          },
          data: this.temperature
        }
      ]
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(position => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        this.getWeather();
      });
    } else {
      this.lat = 43.5297;
      this.lon = 5.4474;
      this.getWeather();
    }
  }

  getWeather() {
    this.spinnersLine.show();
    this.weatherService
      .getForecastDatabyCoords(this.lat, this.lon)
      .subscribe(data => {
        this.weatherData = [data];
        this.getHours();
        this.getTemperature();
        this.spinnersLine.hide();
      });
  }

  private getTemperature() {
    this.weatherData.forEach(element => {
      const dataWeather = element.list.slice(0, 4);
      dataWeather.forEach(item => {
        const temperatures = Math.round(item.main.temp);
        this.temperature.push(temperatures);
      });
    });
  }

  private getHours() {
    this.weatherData.forEach(element => {
      const dataWeather = element.list.slice(0, 4);
      dataWeather.forEach(item => {
        const momentHours = moment(item.dt * 1000).format('HH');
        this.hours.push(momentHours);
      });
    });
  }
}
