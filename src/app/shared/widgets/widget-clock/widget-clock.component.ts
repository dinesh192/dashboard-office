import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-widget-clock',
  templateUrl: './widget-clock.component.html',
  styleUrls: ['./widget-clock.component.scss']
})
export class WidgetClockComponent implements OnInit {
  moment: any = moment;
  today: number = Date.now();
  message = ['Hello', 'Oi', 'Hallo', 'Ciao', 'Nǐn hǎo', 'Hola', 'Bonjour'];
  welcomeMessage: string;

  constructor() {
    this.welcomeMessage = 'Bonjour';
    setInterval(() => {
      this.today = Date.now();
    }, 1);

    this.timeOut();
  }

  ngOnInit() {}

  timeOut() {
    let count = 0;
    setInterval(() => {
      if (count === this.message.length) {
        count = 0;
      }
      this.welcomeMessage = this.message[count];
      count++;
    }, 5000);
  }
}
