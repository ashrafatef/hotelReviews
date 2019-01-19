import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-single-review',
  templateUrl: './hotel-single-review.component.html',
  styleUrls: ['./hotel-single-review.component.scss']
})
export class HotelSingleReviewComponent implements OnInit {

  @Input() singleReview ;

  constructor() { }

  ngOnInit() {
  }

}
