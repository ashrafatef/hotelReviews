import { Component, OnInit } from '@angular/core';
import { HotelsServiceService } from 'src/app/services/hotels-service/hotels-service.service';
import { DataCommunicationService } from 'src/app/services/data-communication/data-communication.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {

  hotelDetials :any ;
  

  constructor(private hotelsService : HotelsServiceService , private dataComm : DataCommunicationService) { }

  ngOnInit() {
    this.dataComm.currentHotel.subscribe(hotelID =>{
      this.hotelsService.getHotelById(hotelID)
        .subscribe(details =>{
          this.hotelDetials = details;
          console.log(details);
        })
    },
    (err)=>{
      console.log(err);
    })
  }

  onNeightsChange(neightsNumber : number){
    this.dataComm.onChangeNeightSelection(neightsNumber);
  }

}
