import { Component, OnInit } from '@angular/core';
import { TwitterService } from 'src/app/shared/services/twitter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  event: boolean;
  constructor(private twitterService: TwitterService) {}

  ngOnInit() {
    this.twitterService.buttonClick.subscribe(data => {
      this.event = data;
    });
  }
}
