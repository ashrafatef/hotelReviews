import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {

  constructor() { }

  // this for communication for hotel selection event 
  private selectedHotel = new BehaviorSubject(null);
  currentHotel = this.selectedHotel.asObservable();
  

  onSelectHotel(hotelId) {
    this.selectedHotel.next(hotelId)
  }
  // this for changing of number of neight event 
  private selectedNeights = new BehaviorSubject(1);
  currentNeightsNumber = this.selectedNeights.asObservable();

  onChangeNeightSelection(neightsNuber : number){
    this.selectedNeights.next(neightsNuber)
  }
}
