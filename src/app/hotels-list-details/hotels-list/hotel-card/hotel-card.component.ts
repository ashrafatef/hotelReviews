import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {

  @Input() hotelDetails :{} ;
  @Input() numberOfNeights : number  = 1;
  //neightNumber = 1 ;

  constructor() { }

  ngOnInit() {
    
  }

}
