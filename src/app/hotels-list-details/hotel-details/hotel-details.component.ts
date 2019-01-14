import { Component, OnInit } from '@angular/core';
import { HotelsServiceService } from 'src/app/services/hotels-service/hotels-service.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {

  constructor(private hotelsService : HotelsServiceService) { }

  ngOnInit() {
    this.hotelsService.currentMessage.subscribe(message => console.log(message))
  }

}
