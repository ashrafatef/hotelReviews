import { Component, OnInit } from '@angular/core';
import { HotelsServiceService } from 'src/app/services/hotels-service/hotels-service.service';
import { DataCommunicationService } from 'src/app/services/data-communication/data-communication.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {

  allHotels ;
  neightsNumber ;
  constructor(private hotelsService : HotelsServiceService , private dataComm : DataCommunicationService) { }

  ngOnInit() {
    this.hotelsService.getAllHotels()
      .subscribe(results =>{
        this.allHotels = results;
       
        this.onHotelSelection();
      });

    this.dataComm.currentNeightsNumber.subscribe((neightsNumber : number)=>{
      this.neightsNumber = neightsNumber ;      
      
    });
  }

  onHotelSelection(hotel ?: any) {
    if(!hotel){
      hotel = this.allHotels[0]
    }
    this.dataComm.onSelectHotel(hotel.id);
  }

}
