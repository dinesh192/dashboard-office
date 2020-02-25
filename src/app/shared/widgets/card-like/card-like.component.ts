import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-card-like',
  templateUrl: './card-like.component.html',
  styleUrls: ['./card-like.component.scss']
})
export class CardLikeComponent implements OnInit {
  @Input() label: string;
  @Input() description: string;
  @Input() total: number;
  @Input() icon: string;
  @Input() bgColor: string;

  constructor() {}

  ngOnInit() {

  }
}
