import { Component, OnInit } from '@angular/core';
import { HotelsServiceService } from 'src/app/services/hotels-service/hotels-service.service';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {

  allHotels : any ;
  constructor(private hotelsService : HotelsServiceService) { }

  ngOnInit() {
    this.hotelsService.getAllHotels()
      .subscribe(results =>{
        this.allHotels = results;
        this.newMessage();
      });
  }

  newMessage(hotel ?: any) {
    if(!hotel){
      hotel = this.allHotels[0]
    }
    this.hotelsService.changeMessage(hotel);
  }

}
