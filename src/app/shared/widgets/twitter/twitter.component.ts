import { Component, OnInit, OnDestroy } from '@angular/core';
import { TwitterService } from '../../services/twitter.service';
import { Tweet } from '../../models/tweet';
import * as moment from 'moment';

@Component({
	selector: 'app-widget-twitter',
	templateUrl: './twitter.component.html',
	styleUrls: [ './twitter.component.scss' ]
})
export class TwitterComponent implements OnInit, OnDestroy {
	tweets: Tweet[] = [];
	ids = [];
	timer;
	since = '';
	moment: any = moment;

	constructor(private twitterService: TwitterService) {}

	ngOnInit() {
		this.getTweets();
		this.timer = setInterval(() => this.getTweets(), 10000000);
	}

	ngOnDestroy() {
		if (this.timer) {
			clearInterval(this.timer);
		}
	}

	getTweets() {
		this.twitterService.home(this.since).subscribe((tweets) => {
			tweets.data.reverse().forEach((tweet) => {
				if (this.ids.indexOf(tweet.id_str) < 0) {
					this.ids.push(tweet.id_str);
					this.tweets.unshift(tweet);
				}
			});

			this.since = '1235957781745803264';
			this.twitterService.buttonClick.next(true);
			this.cleanUp();
		});
	}

	cleanUp() {
		if (this.tweets.length > 1) {
			this.tweets.splice(1);
			this.ids.splice(1);
		}
	}
}
